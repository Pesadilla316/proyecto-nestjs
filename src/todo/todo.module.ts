import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose/dist';
import { TodoSchema } from './schemas/todo.schema';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
       name: 'Todo',
       schema: TodoSchema
      },
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
