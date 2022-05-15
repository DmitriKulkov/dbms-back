import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentsFacultyService } from './students-faculty.service';
import { CreateStudentFacultyDto } from './dto/create-student-faculty.dto';

@Controller('students-faculty')
export class StudentsFacultyController {
  constructor(private studfacService: StudentsFacultyService) {}

  @Get()
  getAll() {
    return this.studfacService.getAll();
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.studfacService.delete(id);
  }

  @Post()
  create(@Body() dto: CreateStudentFacultyDto) {
    return this.studfacService.create(dto);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() dto: CreateStudentFacultyDto) {
    return this.studfacService.update(id, dto);
  }
}
