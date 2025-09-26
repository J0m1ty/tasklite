### Step 3

- Display a task's notes optionally with @if
- Display the list of tasks automatically with @for
    - Use @empty to display something when the list is empty
- EXTRA: use "track" inside @for (look up what this means)
- Mimic the @Output added into task.ts to allow for deleting tasks
    - create an onDelete method in Task
    - wire into a new button in Task's template
    - catch the @Output in TaskList's template
    - support deleting Tasks in TaskList's component

- EXTRA: style task-list with :host (look up what this means)
