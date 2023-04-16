import { User } from '../shared/schema/user';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUserAccounts(): Promise<User[]>;
    getAllAccounts(): Promise<User[]>;
    getSingleUser(id: string): Promise<User>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<void>;
}
