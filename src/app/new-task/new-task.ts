import { Component } from '@angular/core';
// TODO: Import Router and NgForm from Angular packages
import { TaskService } from '../task.service';

@Component({
    selector: 'app-new-task',
    standalone: false,
    templateUrl: './new-task.html',
    styleUrl: './new-task.css'
})
export class NewTaskComponent {
    // TODO: Add properties for form data binding

    constructor(private taskService: TaskService) {}

    // TODO: Implement form submission method
    // onSubmit(form: NgForm) {
    //     // Check if form is valid
    //     // Create new task using taskService
    //     // Navigate back to tasks
    //     // Reset form
    // }
}