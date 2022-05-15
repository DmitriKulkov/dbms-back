import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faculty } from 'src/faculty/faculty.entity';
import { Students } from 'src/students/students.entity';
import { StudentsFacultyController } from './students-faculty.controller';
import { StudentsFacultyService } from './students-faculty.service';
import { StudentFaculty } from './student_faculty.entity';

@Module({
  controllers: [StudentsFacultyController],
  providers: [StudentsFacultyService],
  imports: [TypeOrmModule.forFeature([Students, StudentFaculty, Faculty])],
})
export class StudentsFacultyModule {}
