import { SharedModule } from './../../shared/shared.module';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]), SharedModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
