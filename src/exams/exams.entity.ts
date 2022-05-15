import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Students } from 'src/students/students.entity';

@Entity({ name: 'exams' })
export class Exams {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Ivan', description: 'Name' })
  @Column({ type: 'varchar', length: 20, nullable: false })
  name: string;

  @ApiProperty({ example: '70', description: 'Result' })
  @Column({ type: 'bigint', nullable: false })
  result: number;

  @ManyToOne(() => Students, (student) => student.exams)
  @JoinColumn({ name: 'student_id' })
  student: Students;

  @Column()
  student_id: number;
}
