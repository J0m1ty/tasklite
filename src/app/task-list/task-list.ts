import { Component } from '@angular/core';
import { TaskModel } from '../task';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  tasks: TaskModel[] = [
    { id: 1, title: 'Take 261', done: false },
    { id: 2, title: 'Learn Angular', done: true },
    { id: 3, title: 'Profit', done: false, notes: '???' },
    { id: 4, title: 'Build Angular App', done: false },
    { id: 5, title: 'Master TypeScript', done: true }
  ];

  // TODO: Add filter property for two-way data binding

  onTaskCompleted(task: TaskModel) {
    console.log('Task completed:', task);
  }

  onTaskDeleted(task: TaskModel) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  // TODO: Create filtered() method that returns tasks matching the filter
  // hint: use .filter(task => ...) on this.tasks
  // what to do when there's no filter?

  // TODO: Create clearFilter() method to reset filter
}
