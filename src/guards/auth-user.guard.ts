import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../shared/schema/user';
import { InjectModel } from '@nestjs/mongoose';
import { Config } from '../config/Config';

@Injectable()
export class UserAuthGuard extends AuthGuard('jwt') {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<any> {
    try {
      const request = context.switchToHttp().getRequest();
      let accessToken = request.headers['authorization'];
      accessToken = accessToken.split(' ')[1];

      const decodeToken = this.jwtService.verify(accessToken, {
        secret: Config.JWT_SECRET,
      });
      const { email } = decodeToken;
      let user = await this.getUser(email);

      if (!user) return false;

      // if (!this.isUserValid(user)) {
      //   return false;
      // }

      request.user = user;
      return true;
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException();
    }
  }

  // private isUserValid(user: User): boolean {
  //   // only users can use access tokens
  //   if (user && !(user.type === userType.CLIENT)) {
  //     return false;
  //   }

  //   return true;
  // }

  private async getUser(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }
}
