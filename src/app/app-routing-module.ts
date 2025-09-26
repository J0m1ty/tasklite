import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// TODO: Import the components: TaskListComponent, TaskDetailComponent, NewTaskComponent

const routes: Routes = [
  // TODO: Add routes for '/tasks', '/task/:id', '/new'
  // Check Angular docs for routing syntax if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
