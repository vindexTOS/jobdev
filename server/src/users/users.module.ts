import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UserSchema } from './models/users.models';

@Module({
  imports: [  MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
