import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faculty } from 'src/faculty/faculty.entity';
import { StudentsController } from './students.controller';
import { Students } from './students.entity';
import { StudentsService } from './students.service';
import { StudentFaculty } from '../students-faculty/student_faculty.entity';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [TypeOrmModule.forFeature([Students, StudentFaculty, Faculty])],
})
export class StudentsModule {}
