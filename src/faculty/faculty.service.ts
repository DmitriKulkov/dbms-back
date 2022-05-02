import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { Faculty } from './faculty.entity';

@Injectable()
export class FacultyService {
    constructor(@InjectRepository(Faculty) private facultyRepository: Repository<Faculty>){}
    
    async getAll(){
        const students = await this.facultyRepository.find()
        return students;
    }

    async delete(id:number){
        return await this.facultyRepository.delete(id);
    }

    async update(id: number, dto: CreateFacultyDto){
        return await this.facultyRepository.update(id, {...dto});
    }

    async create(dto: CreateFacultyDto){
        return await this.facultyRepository.save({...dto});
    }
}
