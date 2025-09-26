### Step 4 - Data Binding & Filtering

- Add a filter input field
    - Add an input of type="text", placeholder="Filter tasks...", with two-way binding using [(ngModule)] to task-list.html
    - Add a `filter: string` property to TaskList component

- Create a filtering method that returns filtered tasks
    - Add `filtered()` method in TaskList that returns tasks matching the filter
    - Use `.filter()` and `.toLowerCase()` to match task titles
    - Handle empty filter

- Update the @for loop to use the filtered results
    - Change `@for (task of tasks; track task.id)` to use `filtered()` method

- Add a "Clear Filter" button
    - Add a button with clearFilter() on click, next to the input
    - Create `clearFilter()` method in the component that resets filter to empty string

- EXTRA: Add task count display
    - Show "Showing X of Y tasks" where X is filtered count, Y is total
    - Use interpolation to display the counts