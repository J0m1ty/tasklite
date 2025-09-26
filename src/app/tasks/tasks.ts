import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class TasksComponent {
  constructor(private taskService: TaskService) {}

  // This will display the task list - move TaskList logic here later
}