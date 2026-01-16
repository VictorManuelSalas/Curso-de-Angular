import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { updateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
  private task: any = [];
  getTasks() {
    return this.task;
  }

  getTaskById(id: number) {
    return (
      this.task.find((i: any) => i.id == id) || new NotFoundException('Task not found')
    );
  }
  createTask(task: CreateTaskDto): CreateTaskDto {
    this.task.push({ ...task, id: this.task.length + 1 });
    return task;
  }

  updateTask(details:updateTaskDto) {
    return 'actualizando Tarea';
  }

  updateStatusTask() {
    return 'actualizando status Tarea';
  }

  deleteeTask() {
    return 'eliminaod Tarea';
  }
}
