import { Strategy } from 'passport-jwt';
import { JwtPayload } from '../src/auth/dto/jwt-payload.dto';
import { User } from '../src/shared/schema/user';
import { Model } from 'mongoose';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userModel;
    constructor(userModel: Model<User>);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
