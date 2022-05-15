import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamsController } from './exams.controller';
import { Exams } from './exams.entity';
import { ExamsService } from './exams.service';

@Module({
  controllers: [ExamsController],
  providers: [ExamsService],
  imports: [TypeOrmModule.forFeature([Exams])],
})
export class ExamsModule {}
