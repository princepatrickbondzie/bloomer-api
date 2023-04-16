import { App } from '../shared/schema/app';
import { Model } from 'mongoose';
import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AppGuard implements CanActivate {
    private readonly reflector;
    private readonly appModel;
    constructor(reflector: Reflector, appModel: Model<App>);
    canActivate(context: ExecutionContext): Promise<any>;
}
