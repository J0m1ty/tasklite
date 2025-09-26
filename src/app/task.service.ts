import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { TaskModel } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly tasksUrl = '/tasks.json';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  #tasks = signal<TaskModel[]>([]);
  tasks = this.#tasks.asReadonly();

  constructor(private http: HttpClient) {
    this.getTasks().subscribe(tasks => this.#tasks.set(tasks));
  }
  
  getTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.tasksUrl).pipe(
      tap((_) => console.log('fetched tasks')),
      catchError(this.handleError<TaskModel[]>('getTasks', []))
    );
  }
  
  getTask(id: number): Observable<TaskModel | undefined> {
    return this.http.get<TaskModel[]>(this.tasksUrl).pipe(
      map(tasks => tasks.find(task => task.id === id)),
      tap((task) => console.log(task ? `fetched task id=${id}` : `task id=${id} not found`)),
      catchError(this.handleError<TaskModel | undefined>(`getTask id=${id}`))
    );
  }

  // in real app these would be HTTP calls, not mutating local state directly
  // just don't reload the page :)
  addNewTask(title: string, notes?: string): void {
    const currentTasks = this.#tasks();
    const newId = currentTasks.length > 0 ? Math.max(...currentTasks.map(t => t.id)) + 1 : 1;
    const newTask: TaskModel = {
      id: newId,
      title,
      notes,
      done: false
    };
    this.#tasks.update(tasks => [...tasks, newTask]);
    console.log(`created task w/ id=${newTask.id}`);
  }

  toggleTask(id: number): void {
    this.#tasks.update(tasks => 
      tasks.map(task => 
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
    console.log(`updated task id=${id}`);
  }

  deleteTask(id: number): void {
    this.#tasks.update(tasks => tasks.filter(t => t.id !== id));
    console.log(`deleted task id=${id}`);
  }
  
  getTaskById(id: number): TaskModel | undefined {
    return this.#tasks().find(task => task.id === id);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}