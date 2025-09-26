import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';
import { Task } from './task/task';
import { TaskList } from './task-list/task-list';
import { TasksComponent } from './tasks/tasks';
import { TaskDetailComponent } from './task-detail/task-detail';
import { NewTaskComponent } from './new-task/new-task';

@NgModule({
  declarations: [
    AppComponent,
    Task,
    TaskList,
    TasksComponent,
    TaskDetailComponent,
    NewTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
