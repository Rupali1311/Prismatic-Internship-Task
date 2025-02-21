import { Component,inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  task: string='';
  taskService:TaskService = inject(TaskService);

  OnCreateTask(){
    console.log(this.task);
    this.taskService.OnCreateTask(this.task);
  }
}
