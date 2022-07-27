import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExamsDto } from './dto/create-exams.dto';
import { Exams } from './exams.entity';

@Injectable()
export class ExamsService {
  constructor(
    @InjectRepository(Exams) private examsRepository: Repository<Exams>,
  ) {}

  async getAll() {
    const students = await this.examsRepository.find();
    return students;
  }

  async delete(id: number) {
    return await this.examsRepository.delete(id);
  }

  async update(id: number, dto: CreateExamsDto) {
    return await this.examsRepository.update(id, { ...dto });
  }

  async create(dto: CreateExamsDto) {
    return await this.examsRepository.save({ ...dto });
  }

  async getChart(){
    const data = this.examsRepository.query(
        `select students.name, students.surname, students.patronymic, stud_ex.sum
        from students
        join 
        (
        select exams.student_id, sum(exams.result)
        from exams
        group by exams.student_id
        ) as stud_ex
        on students.id = stud_ex.student_id;`
    )
    return data;
  }
}
