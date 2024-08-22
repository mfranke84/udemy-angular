import { Component, Output, inject} from '@angular/core';
import { Input } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() task!: Task;
  
  private tasksService = inject(TasksService)
  
  onCompleteTask(){
    this.tasksService.removeTask(this.task.id)
  }
}
 

