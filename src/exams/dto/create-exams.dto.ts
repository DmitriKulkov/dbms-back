import { Students } from "src/students/students.entity";

export class CreateExamsDto{
    id:number;
    name:string;
    result: number;
    student_id: Students;
}