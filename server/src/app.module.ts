import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://akaki7600:LSIQDC1VhriJFenp@emplayed.fsztqn5.mongodb.net/',
    ),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

