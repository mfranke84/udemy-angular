import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-11',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Create presentation',
      summary: 'Create a presentation for the product',
      dueDate: '2024-05-11',
    }
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id );
  }

}
