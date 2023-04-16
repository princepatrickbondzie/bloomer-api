import { User } from '../shared/schema/user';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getOnlyUsers(): Promise<User[]>;
    getEveryUserType(): Promise<User[]>;
    getSingleUser(id: string): Promise<User>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<void>;
}
