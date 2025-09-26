import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { TaskDetailComponent } from './task-detail/task-detail';
import { NewTaskComponent } from './new-task/new-task';
import { taskExistsGuard } from './task-exists-guard';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskList },
  { path: 'task/:id', component: TaskDetailComponent, canActivate: [taskExistsGuard] },
  { path: 'new', component: NewTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
