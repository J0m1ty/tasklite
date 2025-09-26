### Step 8 - Template-Driven Forms

- Create a template-driven form in NewTaskComponent
    - Add form fields: title (required), notes (optional)
    - Use `[(ngModel)]` for two-way data binding with component properties
    - Add form validation with `#taskForm="ngForm"` and `required` attributes
    - Display validation errors conditionally using `@if` and form field states

- Implement form submission and navigation
    - Add `(ngSubmit)="onSubmit(taskForm)"` to the form element
    - Create `onSubmit(form: NgForm)` method in component
    - Check `form.valid` before processing the form data
    - Use `taskService.addNewTask(title)` to create the task
    - Navigate back to '/tasks' after successful creation using Router

- Add form styling and user experience
    - Style form fields, labels, and validation error messages
    - Disable submit button when form is invalid using `[disabled]="!taskForm.valid"`
    - Show success/error feedback to user after submission
    - Reset form after successful submission using `form.resetForm()`

- EXTRA: Add more form features
    - Add priority levels (Low, Medium, High) with select dropdown
    - Add cancel button that navigates back without saving
    - Add form field highlighting for validation states
    - Implement client-side validation messages for better UX
