import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  public async signUp(email: string, password: string) {
    // See if email is in use
    const users = await this.usersService.find(email);
    if (users.length) throw new BadRequestException('Email in use');

    // Hash the users password
    // Generate a salt
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    const result = `${salt}.${hash.toString('hex')}`;
    
    const user = this.usersService.create(email, result);

    return user;
  }

  public async signIn(email: string, password: string) {
    const [user] = await this.usersService.find(email);

    if (!user) throw new NotFoundException('User Not Found');

    const [salt, storedHash] = user.password.split('.');
    
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) throw new BadRequestException('Bad Email or Password');

    return user;
  }
}
