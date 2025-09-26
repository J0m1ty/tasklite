import { Injectable, signal } from '@angular/core';
import { TaskModel } from './task';

// TODO: Add providedIn to @Injectable() - use your IDE's autocomplete to choose the best option
@Injectable()
export class TaskService {
  #tasks = signal<TaskModel[]>([
    { id: 1, title: 'Take 261', done: false },
    { id: 2, title: 'Learn Angular', done: true },
    { id: 3, title: 'Profit', done: false, notes: '???' },
    { id: 4, title: 'Build Angular App', done: false },
    { id: 5, title: 'Master TypeScript', done: true }
  ]);

  tasks = this.#tasks.asReadonly(); // components can read but not modify directly

  addTask(task: TaskModel) {
    // TODO: Use this.#tasks.update() to add the new task to the array
  }

  deleteTask(id: number) {
    // TODO: Use this.#tasks.update() to filter out the task with the given id
  }

  toggleTask(id: number) {
    // TODO: Use this.#tasks.update() to find the task and toggle its done property
    // Hint: Use map() to create a new array with the updated task
  }

  // EXTRA: Method to add a task with just a title (auto-generate ID)
  addNewTask(title: string, notes?: string) {
    // TODO: Create a new task with auto-generated ID and add it
    // Hint: Use Math.max(...this.#tasks().map(t => t.id)) + 1 for new ID
  }
}