import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  private async findUser(username: string): Promise<any> {

    const users = [
      {
        userId: 1,
        username: 'test',
        password: await bcrypt.hash('test', 10) 
      },
    ];
    return users.find(user => user.username === username);
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.findUser(username);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
