// TODO: Import signal and computed from '@angular/core'
import { Component } from '@angular/core';
import { TaskModel } from '../task';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  // TODO: Convert to signal: tasks = signal<TaskModel[]>([...])
  tasks: TaskModel[] = [
    { id: 1, title: 'Take 261', done: false },
    { id: 2, title: 'Learn Angular', done: true },
    { id: 3, title: 'Profit', done: false, notes: '???' },
    { id: 4, title: 'Build Angular App', done: false },
    { id: 5, title: 'Master TypeScript', done: true }
  ];

  // TODO: Convert to signal: filter = signal('')
  filter: string = '';

  onTaskCompleted(task: TaskModel) {
    console.log('Task completed:', task);
  }

  onTaskDeleted(task: TaskModel) {
    // TODO: Update to use signal: this.tasks.update(tasks => ...)
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  // TODO: Convert to computed signal: filtered = computed(() => { ... })
  filtered() {
    if (!this.filter) return this.tasks;
    return this.tasks.filter(task => 
      task.title.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  clearFilter() {
    // TODO: Update to use signal (hint: .set)
    this.filter = '';
  }
}
