### Step 7 - Routing

- Set up routing configuration in app-routing-module.ts
    - Add routes for: `''`,  `'/tasks'`, `'/task/:id'`, `'/new'`
    - Check the Angular docs for routing syntax if needed

- Update app.html to use router-outlet
    - Replace `<app-task-list></app-task-list>` with `<router-outlet></router-outlet>`

- Add navigation between components in app.html with `routerLink`
    - Update app.html
    - Update task.html

- Create a route guard to protect invalid task IDs
    - Run `ng generate guard task-exists` in terminal
    - Redirect to '/tasks' if task doesn't exist
    - Check Angular docs for guidance

#### HINT: Guard function implementation (try on your own first)

```
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
```

Note we can't inject into a constructor (there isn't one), so we inject into a variable.