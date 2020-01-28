// Core
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';


// Services
import { User } from '../users/users.model';
import { UsersService } from '../users/users.service';



@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}


  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.find(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login({ username, id }: User) {
    return {
      access_token: this.jwtService.sign({
        id,
        username,
      }),
    };
  }
}
