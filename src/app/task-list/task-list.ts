import { Component, signal, computed } from '@angular/core';
import { TaskModel } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  constructor(private taskService: TaskService) {}

  filter = signal('');

  onTaskCompleted(task: TaskModel) {
    this.taskService.toggleTask(task.id);
  }

  onTaskDeleted(task: TaskModel) {
    this.taskService.deleteTask(task.id);
  }

  filtered = computed(() => {
    const filterValue = this.filter();
    if (!filterValue) return this.taskService.tasks();
    return this.taskService.tasks().filter(task => 
      task.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  });

  taskCounts = computed(() => ({
    total: this.taskService.tasks().length,
    filtered: this.filtered().length
  }));

  clearFilter() {
    this.filter.set('');
  }
}
