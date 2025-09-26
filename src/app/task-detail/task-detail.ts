import { Component, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { TaskModel } from '../task';

@Component({
    selector: 'app-task-detail',
    standalone: false,
    templateUrl: './task-detail.html',
    styleUrl: './task-detail.css'
})
export class TaskDetailComponent implements OnInit {
    task = signal<TaskModel | null>(null);
    isLoading = signal(true);
    error = signal<string | null>(null);

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private taskService: TaskService
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.taskService.getTask(+id).subscribe({
                next: (task) => {
                    this.task.set(task || null);
                    this.isLoading.set(false);
                    if (!task) {
                        this.error.set('Task not found');
                    }
                },
                error: (err) => {
                    this.isLoading.set(false);
                    this.error.set('Failed to load task');
                    console.error('Error loading task:', err);
                }
            });
        } else {
            this.isLoading.set(false);
            this.error.set('Invalid task ID');
        }
    }

    toggleTask() {
        const task = this.task();
        if (task) this.taskService.toggleTask(task.id);
    }

    deleteTask() {
        const task = this.task();
        if (task) {
            this.taskService.deleteTask(task.id);
            this.router.navigate(['/tasks']);
        }
    }

    goBack() {
        this.router.navigate(['/tasks']);
    }
}