// Core
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Services
import { UsersService } from './users.service';
import { User } from './users.model';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    UsersService,
  ],
  exports: [
    UsersService,
    TypeOrmModule,
  ],
})
export class UsersModule {}
