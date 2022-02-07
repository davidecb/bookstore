import { AuthRepository } from './auth.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
