import { Controller, Delete, Get, Param } from '@nestjs/common';
import { StudentsFacultyService } from './students-faculty.service';

@Controller('students-faculty')
export class StudentsFacultyController {
    constructor(private studfacService: StudentsFacultyService){}

    @Get()
    getAll(){
        return this.studfacService.getAll();
    }

    @Delete("/:id")
    delete(@Param("id") id:number){
        return this.studfacService.delete(id);
    }

    // @Post()
    // create(@Body() dto: CreateStudentDto){
    //     return this.studfacService.create(dto);
    // }

    // @Put("/:id")
    // update(@Param("id") id: number,  @Body() dto: CreateStudentDto){
    //     return this.studfacService.update(id, dto);
    // }
}
