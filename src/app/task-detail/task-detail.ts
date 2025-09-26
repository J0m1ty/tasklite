import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task-detail',
    standalone: false,
    templateUrl: './task-detail.html',
    styleUrl: './task-detail.css'
})
export class TaskDetailComponent {
    taskId = signal<number | null>(null);
    
    task = computed(() => {
        const id = this.taskId();
        return id ? this.taskService.getTaskById(id) : null;
    });

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private taskService: TaskService
    ) {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) this.taskId.set(+id);
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