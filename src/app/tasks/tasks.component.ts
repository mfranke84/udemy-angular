import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { Task } from '../task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  
  tasks = dummyTasks;
  newTask = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id );
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id )
    
  }

  startAddingNewTask(){
    this.newTask = true;
    // this.tasks.push(
    //   { 
    //     id:  't'+ this.tasks.length++,
    //     userId: this.id,
    //     title: "New Task",
    //     summary: "I did this exercise on my own",
    //     dueDate: "2024-12-31"
    //   }
    // )
  }

}
