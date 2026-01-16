import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

import { CreateTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  //
  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: number) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({
    whitelist: true, // elimina campos no definidos en el DTO
    forbidNonWhitelisted: true, // lanza error si mandan campos extra
    transform: true, // transforma JSON a instancia de clase
  }))
  createTask(@Body() task: CreateTaskDto) {
    console.log(task);
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask(@Body() task: updateTaskDto) {
    return this.tasksService.updateTask(task);
  }

  @Patch()
  updateStatusTask() {
    return this.tasksService.updateStatusTask();
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteeTask();
  }
}
