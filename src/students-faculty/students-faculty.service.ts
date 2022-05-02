import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentFaculty } from './student_faculty.entity';

@Injectable()
export class StudentsFacultyService {
    constructor(@InjectRepository(StudentFaculty) private studfacRepository: Repository<StudentFaculty>){}
    
    async getAll(){
        const students = await this.studfacRepository.find()
        return students;
    }

    async delete(id:number){
        return await this.studfacRepository.delete(id);
    }

    // async update(id:number, dto: CreateStudentDto){
    //     return await this.studfacRepository.update(id, {...dto});
    // }

    // async create(dto: CreateStudentDto){
    //     return await this.studfacRepository.save({...dto});
    // }
}
