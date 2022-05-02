import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from 'src/students/students.entity';
import { StudentFaculty } from 'src/students-faculty/student_faculty.entity';
import { FacultyController } from './faculty.controller';
import { Faculty } from './faculty.entity';
import { FacultyService } from './faculty.service';

@Module({
  controllers: [FacultyController],
  providers: [FacultyService],
  imports: [
    TypeOrmModule.forFeature([Faculty, StudentFaculty, Students])
  ]
})
export class FacultyModule {}
