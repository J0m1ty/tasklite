import { Component, Input } from '@angular/core';
import { TaskModel } from '../task';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() task!: TaskModel;
}
