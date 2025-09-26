import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TaskService } from './task.service';

export const taskExistsGuard: CanActivateFn = (route, state) => {
  const taskService = inject(TaskService);
  const router = inject(Router);
  
  const taskId = route.paramMap.get('id');
  
  if (!taskId) {
    router.navigate(['/tasks']);
    return false;
  }
  
  const task = taskService.getTaskById(+taskId);
  
  if (!task) {
    router.navigate(['/tasks']);
    return false;
  }
  
  return true;
};
