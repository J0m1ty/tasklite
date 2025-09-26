import { Component } from '@angular/core';

import { TaskService } from '../task.service';

@Component({
    selector: 'app-new-task',
    standalone: false,
    templateUrl: './new-task.html',
    styleUrl: './new-task.css'
})

export class NewTaskComponent {
    constructor(private taskService: TaskService) {}
}