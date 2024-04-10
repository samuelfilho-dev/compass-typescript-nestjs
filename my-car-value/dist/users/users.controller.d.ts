import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
export declare class UsersController {
    private userService;
    private authService;
    constructor(userService: UsersService, authService: AuthService);
    createUser(body: CreateUserDto, session: any): Promise<User>;
    signin(body: CreateUserDto, session: any): Promise<User>;
    signOut(session: any): void;
    whoAmI(user: User): User;
    findUser(id: string): Promise<User>;
    findAllUsers(email: string): Promise<User[]>;
    updateUser(id: string, body: UpdateUserDto): Promise<User>;
    removeUser(id: string): Promise<User>;
}
