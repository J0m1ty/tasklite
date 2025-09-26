### Step 6 - Task Service

- Complete the TaskService (already created for you in task.service.ts)
    - Add `providedIn` to the @Injectable decorator (use IDE autocomplete)
    - Implement `addTask()` method using `this.#tasks.update()`
    - Implement `deleteTask()` method using `this.#tasks.update()` with filter
    - Implement `toggleTask()` method using `this.#tasks.update()` with map

- Inject the service into TaskList component
    - Import TaskService in task-list.ts
    - Add constructor with dependency injection: `constructor(private taskService: TaskService) {}`
    - Remove the local tasks signal and use `taskService.tasks()` instead

- Update component methods to use service
    - Update `onTaskDeleted()` to call `taskService.deleteTask(task.id)`
    - Update `onTaskCompleted()` to call `taskService.toggleTask(task.id)`
    - Update `filtered` computed to use `taskService.tasks()`
    - Update `taskCounts` computed to use `taskService.tasks()`

- EXTRA: Implement `addNewTask()` method in service
    - Generate auto-incrementing IDs for new tasks
    - Add input field and button in template to create new tasks