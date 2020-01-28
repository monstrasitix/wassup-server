// Core
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';


// Modules
import { UsersModule } from '../users/users.module';


// Services
import { AuthService } from './auth.service';


// Strategies
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';


// Constants
import { jwtConstants } from './constants';



@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [
    AuthService,
  ],
})
export class AuthModule {}
