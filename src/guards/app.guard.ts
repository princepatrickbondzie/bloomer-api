import { App } from '../shared/schema/app';
import { Model } from 'mongoose';
import { Reflector } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @InjectModel(App.name) private readonly appModel: Model<App>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<any> {
    try {
      const request = context.switchToHttp().getRequest();
      const appToken = request.headers['x-authorization'];
      if (!appToken) {
        return false;
      }
      const app = await this.appModel.findOne({ apiKey: appToken });

      if (!app) {
        return false;
      }
      request.app = app;
      return app.active === true && app.apiKey === appToken;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
