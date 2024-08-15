import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskData, Task } from '../task/task.model';
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
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id );
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id )
  }

  startAddingNewTask(){
    this.isAddingTask = true;
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

  onCancel(){
    this.isAddingTask = false;
  }

  onSubmit(newTask: NewTaskData){
    this.tasks.push({
      id: 't'+ this.tasks.length++,
      userId: this.id,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date
    }
    )
    this.isAddingTask = false;
  }

}
