### Step 9 - RxJS and HTTP Client

- Refactor the route guard to use Observables
    - Update `task-exists-guard.ts` to use `taskService.getTask(id)` instead of `getTaskById(id)`
    - Handle the Observable response properly in the guard
    - Use RxJS operators like `map()` to transform the Observable<TaskModel | undefined> to boolean
    - Test the guard by navigating to valid and invalid task URLs
    - Notice how the guard now makes an HTTP request to validate the task
    - Open the network tab to verify this