import { Component, signal, computed } from '@angular/core';
// TODO: Import TaskService
import { TaskModel } from '../task';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  // TODO: Add constructor and inject TaskService

  // TODO: Remove this local tasks array
  tasks = signal<TaskModel[]>([
    { id: 1, title: 'Take 261', done: false },
    { id: 2, title: 'Learn Angular', done: true },
    { id: 3, title: 'Profit', done: false, notes: '???' },
    { id: 4, title: 'Build Angular App', done: false },
    { id: 5, title: 'Master TypeScript', done: true }
  ]);

  filter = signal('');

  onTaskCompleted(task: TaskModel) {
    // TODO: Call taskService.toggleTask(task.id) to update the task's done status
    console.log('Task completed:', task);
  }

  onTaskDeleted(task: TaskModel) {
    // TODO: Call taskService.deleteTask(task.id) instead
    this.tasks.update(tasks => tasks.filter(t => t.id !== task.id));
  }

  // TODO: Update to use taskService.tasks() instead of this.tasks()
  filtered = computed(() => {
    const filterValue = this.filter();
    if (!filterValue) return this.tasks();
    return this.tasks().filter(task => 
      task.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  });

  // TODO: Update to use taskService.tasks() instead of this.tasks()
  taskCounts = computed(() => ({
    total: this.tasks().length,
    filtered: this.filtered().length
  }));

  clearFilter() {
    this.filter.set('');
  }
}
