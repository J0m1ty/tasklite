import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from '../task';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() task!: TaskModel;
  @Output() taskCompleted = new EventEmitter<TaskModel>();
  // add support for deleting tasks

  onToggleComplete() {
    this.task.done = !this.task.done;
    this.taskCompleted.emit(this.task);
  }

  // add onDelete method
}
