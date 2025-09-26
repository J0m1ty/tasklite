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
  @Output() taskDeleted = new EventEmitter<TaskModel>();

  onToggleComplete() {
    this.taskCompleted.emit(this.task);
  }

  onDelete() {
    this.taskDeleted.emit(this.task);
  }
}
