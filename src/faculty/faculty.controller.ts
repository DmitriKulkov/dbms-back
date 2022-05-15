import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { FacultyService } from './faculty.service';

@Controller('faculty')
export class FacultyController {
  constructor(private facultyService: FacultyService) {}

  @Get()
  getAll() {
    return this.facultyService.getAll();
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.facultyService.delete(id);
  }

  @Post()
  create(@Body() dto: CreateFacultyDto) {
    return this.facultyService.create(dto);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() dto: CreateFacultyDto) {
    return this.facultyService.update(id, dto);
  }
}
