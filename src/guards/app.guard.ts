import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { App } from '../shared/schema/app';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @InjectModel(App.name) private readonly appModel: Model<App>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();
    const appToken = request.headers['x-authorization'];
    if (!appToken) {
      return false;
    }
    const app = await this.appModel.findOne({
      where: { apiKey: appToken },
    });
    if (!app) {
      return false;
    }
    request.app = app;
    return app.active === true && app.apiKey === appToken;
  }
}
