### Step 7 - Routing

- Set up routing configuration in app-routing-module.ts
    - Add routes for: `''`,  `'/tasks'`, `'/task/:id'`, `'/new'`
    - Check the Angular docs for routing syntax if needed

- Update app.html to use router-outlet
    - Replace `<app-task-list></app-task-list>` with `<router-outlet></router-outlet>`

- Add navigation between components in app.html, use <a>'s and `routerLink`

- Create a route guard to protect invalid task IDs
    - Run `ng generate guard task-exists` in terminal
    - Redirect to '/tasks' if task doesn't exist
    - Check Angular docs for guidance
