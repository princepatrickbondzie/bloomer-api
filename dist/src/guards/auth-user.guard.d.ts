import { ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from '../shared/schema/user';
declare const UserAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class UserAuthGuard extends UserAuthGuard_base {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<any>;
    private getUser;
}
export {};
