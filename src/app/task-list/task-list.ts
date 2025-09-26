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
    { id: 3, title: 'Profit', done: false, notes: '???' }
  ];
}
