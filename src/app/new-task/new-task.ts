import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-new-task',
    standalone: false,
    templateUrl: './new-task.html',
    styleUrl: './new-task.css'
})
export class NewTaskComponent {
    title: string = '';
    notes: string = '';

    constructor(
        private taskService: TaskService,
        private router: Router
    ) {}

    onSubmit(form: NgForm) {
        if (form.valid) {
            this.taskService.addNewTask(this.title, this.notes);
            this.router.navigate(['/tasks']);
            form.resetForm();
            this.title = '';
            this.notes = '';
        }
    }

    onCancel() {
        this.router.navigate(['/tasks']);
    }
}