### Step 8 - Template-Driven Forms

- Set up component properties for form data
    - Add `title: string = ''` and `notes: string = ''` properties
    - Import `NgForm` from Angular

- Build the template-driven form in new-task.html
    - Complete the form element with `#taskForm="ngForm"` and `(ngSubmit)`
    - Add input fields with `[(ngModel)]`, `name`, and `required` attributes
    - Add validation error messages using `@if`
    - EXTRA: add styles for the error messages

- Implement form submission logic
    - Complete the `onSubmit(form: NgForm)` method
    - Check `form.valid` before processing
    - Call `taskService.addNewTask(this.title)` to create task
    - Navigate to '/tasks' on success and reset form

- EXTRA: Cancel button
    - Inject Router in form component constructor
    - Add a cancel button that navigates back without saving
