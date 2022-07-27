import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { Faculty } from './faculty.entity';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(Faculty) private facultyRepository: Repository<Faculty>,
  ) {}

  async getAll() {
    const students = await this.facultyRepository.find();
    return students;
  }

  async delete(id: number) {
    return await this.facultyRepository.delete(id);
  }

  async update(id: number, dto: CreateFacultyDto) {
    return await this.facultyRepository.update(id, { ...dto });
  }

  async create(dto: CreateFacultyDto) {
    return await this.facultyRepository.save({ ...dto });
  }

  async getChart(){
    const data = await this.facultyRepository.query(
        `select faculty.name, stud_fac.count 
        from faculty 
        join 
        (
        select student_faculty.faculty_id, count(students.id)
        from student_faculty
        join students
        on students.id = student_faculty.student_id
        group by student_faculty.faculty_id
        ) as stud_fac
        on faculty.id = stud_fac.faculty_id;`
    )
    return data;
  }
}
