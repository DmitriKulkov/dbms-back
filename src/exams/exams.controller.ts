import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateExamsDto } from './dto/create-exams.dto';
import { ExamsService } from './exams.service';

@Controller('exams')
export class ExamsController {
  constructor(private examsService: ExamsService) {}

  @Get()
  getAll() {
    return this.examsService.getAll();
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.examsService.delete(id);
  }

  @Post()
  create(@Body() dto: CreateExamsDto) {
    return this.examsService.create(dto);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() dto: CreateExamsDto) {
    return this.examsService.update(id, dto);
  }

  @Get('/chart')
  getChart(){
    return this.examsService.getChart();
  }

}
