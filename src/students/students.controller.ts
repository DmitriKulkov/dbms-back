import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  getAll() {
    return this.studentsService.getAll();
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.studentsService.delete(id);
  }

  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.studentsService.create(dto);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() dto: CreateStudentDto) {
    return this.studentsService.update(id, dto);
  }
}
