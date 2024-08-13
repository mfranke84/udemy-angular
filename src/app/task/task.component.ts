import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() id?: number;
  @Input() title?: string;
  @Input() summary?: string;
  @Input() dueDate?: string;
}
