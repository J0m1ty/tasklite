import { Injectable, signal } from '@angular/core';
import { TaskModel } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  #tasks = signal<TaskModel[]>([
    { id: 1, title: 'Take 261', done: false },
    { id: 2, title: 'Learn Angular', done: true },
    { id: 3, title: 'Profit', done: false, notes: '???' },
    { id: 4, title: 'Build Angular App', done: false },
    { id: 5, title: 'Master TypeScript', done: true }
  ]);

  tasks = this.#tasks.asReadonly();

  addTask(task: TaskModel) {
    this.#tasks.update(tasks => [...tasks, task]);
  }

  deleteTask(id: number) {
    this.#tasks.update(tasks => tasks.filter(t => t.id !== id));
  }

  toggleTask(id: number) {
    this.#tasks.update(tasks => 
      tasks.map(task => 
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  addNewTask(title: string) {
    const newId = Math.max(...this.#tasks().map(t => t.id)) + 1;
    const newTask: TaskModel = {
      id: newId,
      title,
      done: false
    };
    this.addTask(newTask);
  }

  getTaskById(id: number): TaskModel | undefined {
    return this.#tasks().find(task => task.id === id);
  }
}