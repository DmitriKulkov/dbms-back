import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { StudentFaculty } from 'src/students-faculty/student_faculty.entity';

@Entity({ name: 'faculty' })
export class Faculty {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Simple Faculty', description: 'Faculty name' })
  @Column({ type: 'varchar', length: 20, nullable: false })
  name: string;

  @OneToMany(() => StudentFaculty, (student_faculty) => student_faculty.faculty)
  student_faculty: StudentFaculty[];
}
