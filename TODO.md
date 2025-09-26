### Step 5 - Signals

- Convert tasks array to a signal
- Convert filter property to a signal
- Create a computed signal for filtered tasks
- Update task operations to use signals

- EXTRA: Add a computed signal for task counts
    - Create `taskCounts = computed(() => ({ total: ..., filtered: ... }))`
    - Update template to use `taskCounts().filtered` and `taskCounts().total`


#### HELP: Signal two-way binding workaround
You might be tempted to try `[(ngModel)]="filter()"` but this won't work. Instead, split it into `[ngModel]="filter()" (ngModelChange)="filter.set($event)`.