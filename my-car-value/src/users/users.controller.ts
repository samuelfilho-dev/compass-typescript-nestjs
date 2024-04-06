import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  public createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }

  @Get('/:id')
  public async findUser(@Param('id') id: string) {
    const user = await this.userService.findOne(parseInt(id));

    if (!user) throw new NotFoundException('User Not Found');

    return user;
  }

  @Get()
  public findAllUsers(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Patch('/:id')
  public updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body);
  }

  @Delete('/:id')
  public removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}
