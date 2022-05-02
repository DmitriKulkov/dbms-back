import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { FacultyModule } from './faculty/faculty.module';
import { ExamsModule } from './exams/exams.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from './students/students.entity';
import { Faculty } from './faculty/faculty.entity';
import { StudentFaculty } from './students-faculty/student_faculty.entity';
import { Exams } from './exams/exams.entity';
import { StudentsFacultyModule } from './students-faculty/students-faculty.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host:"localhost",
      port:5432,
      username:"postgres",
      password:"root",
      database:"dbms4",
      entities:[
        Students,
        Faculty,
        StudentFaculty,
        Exams,
      ],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    StudentsModule, 
    FacultyModule, 
    ExamsModule, StudentsFacultyModule],
    controllers:[],
    providers:[],
})
export class AppModule {}
