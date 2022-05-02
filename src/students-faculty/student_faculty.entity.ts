import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
    ManyToMany,
  } from "typeorm";
  import { ApiProperty } from "@nestjs/swagger";
import { Faculty } from "src/faculty/faculty.entity";
import { Students } from "../students/students.entity";
  
  @Entity({ name: "student_faculty" })
  export class StudentFaculty {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Faculty, (faculty_id) => faculty_id.student_faculty)
    @JoinColumn({ name: "faculty_id" })
    faculty_id: Faculty;

    @ManyToOne(() => Students, (student_id) => student_id.student_faculty)
    @JoinColumn({ name: "student_id" })
    student_id: Students;
  }
  