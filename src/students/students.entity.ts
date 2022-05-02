import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from "typeorm";
  import { ApiProperty } from "@nestjs/swagger";
import { Exams } from "src/exams/exams.entity";
import { StudentFaculty } from "../students-faculty/student_faculty.entity";
  
  @Entity({ name: "students" })
  export class Students {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ApiProperty({ example: "Ivan", description: "Name" })
    @Column({ type: "varchar", length: 20, nullable: false })
    name: string;
  
    @ApiProperty({ example: "Ivanov", description: "Surname" })
    @Column({ type: "varchar", length: 20, nullable: false })
    surname: string;

    @ApiProperty({ example: "Ivanovich", description: "Patronymic" })
    @Column({ type: "varchar", length: 20, nullable: true })
    patronymic: string;

    @OneToMany(() => Exams, (exams) => exams.student_id)
    exams: Exams[];

    @OneToMany(() => StudentFaculty, (student_faculty) => student_faculty.student_id)
    student_faculty: StudentFaculty[];

  }
  