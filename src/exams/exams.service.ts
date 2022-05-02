import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExamsDto } from './dto/create-exams.dto';
import { Exams } from './exams.entity';

@Injectable()
export class ExamsService {
    constructor(@InjectRepository(Exams) private examsRepository: Repository<Exams>){}
    
    async getAll(){
        const students = await this.examsRepository.find()
        return students;
    }

    async delete(id:number){
        return await this.examsRepository.delete(id);
    }

    async update(id:number, dto: CreateExamsDto){
        return await this.examsRepository.update(id, {...dto});
    }

    async create(dto: CreateExamsDto){
        return await this.examsRepository.save({...dto});
    }
}
