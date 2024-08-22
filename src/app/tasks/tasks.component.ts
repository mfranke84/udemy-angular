import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';
import { NewTaskData } from '../task/task.model';


@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false; 

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string){
    
  }

  startAddingNewTask(){
    this.isAddingTask = true;
  }

  onClose(){
    this.isAddingTask = false;
  }

  onSubmit(newTask: NewTaskData){
    
    this.isAddingTask = false;
  }

}
