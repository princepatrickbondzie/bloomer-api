import { Reflector } from '@nestjs/core';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class TypeGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const types = this.reflector.get<string[]>('types', context.getHandler());
    const { user } = context.switchToHttp().getRequest();

    return types.some((type) => {
      return type === user.type;
    });
  }
}
