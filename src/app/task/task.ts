import { Component, Input } from '@angular/core';
import { TaskModel } from '../task';

@Component({
  // TODO[component] complete this section
})
export class Task {
  @Input() task!: TaskModel;
}
