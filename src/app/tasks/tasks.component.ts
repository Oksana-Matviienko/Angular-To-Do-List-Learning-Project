import { Component, EventEmitter, Input, Output} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.setvice';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input ({required: true}) userId!: string;
@Input ({required: true}) name!: string;

isAddTask = false;

constructor(private tasksService: TasksService){}

  get selectedUserTasks (){
    return this.tasksService.getUserTasks(this.userId)
  }

  onStartAddTask (){
    this.isAddTask = true;
  }

  onCloseAddTask (){
    this.isAddTask = false;
  }

}
