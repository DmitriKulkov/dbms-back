import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { Students } from './students.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Students)
    private studentsRepository: Repository<Students>,
  ) {}

  async getAll() {
    const students = await this.studentsRepository.find();
    return students;
  }

  async delete(id: number) {
    return await this.studentsRepository.delete(id);
  }

  async update(id: number, dto: CreateStudentDto) {
    return await this.studentsRepository.update(id, { ...dto });
  }

  async create(dto: CreateStudentDto) {
    return await this.studentsRepository.save({ ...dto });
  }

}
