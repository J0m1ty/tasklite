import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// TODO: Import the components: TaskListComponent, TaskDetailComponent, NewTaskComponent

const routes: Routes = [
  // TODO: Add routes for '/tasks', '/task/:id', '/new'
  // Add a CanActivate guard to the '/task/:id' route with a guard named task-exists
  // Check Angular docs for generate command or routing syntax if needed
  // Check TODO for guard implementation
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
