import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from '@nestjs/mongoose';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UnauthorizedException, Injectable } from '@nestjs/common';
import { Config } from '../../config/config';
import { JwtPayload } from '../dto/jwt-payload.dto';
import { User } from '../../shared/schema/user';
import { userType } from '../../shared/utility/types';
import { Model } from 'mongoose';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Config.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const { email } = payload;
    const user: User = await this.userModel.findOne({ email });

    if (!user || !user.active || user.type === userType.Client) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
