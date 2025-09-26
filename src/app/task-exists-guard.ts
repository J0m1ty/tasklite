import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TaskService } from './task.service';

export const taskExistsGuard: CanActivateFn = (route, state) => {
  const taskService = inject(TaskService);
  const router = inject(Router);
  
  const taskId = route.paramMap.get('id');
  
  if (!taskId) {
    router.navigate(['/tasks']);
    return false;
  }
  
  // guards can automatically subscribe
  return taskService.getTask(+taskId).pipe(
    map(task => {
      if (!task) {
        router.navigate(['/tasks']);
        return false;
      }
      return true;
    }),
    catchError(() => {
      router.navigate(['/tasks']);
      return of(false);
    })
  );
};
