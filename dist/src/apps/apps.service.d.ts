import { Model } from 'mongoose';
import { CreateAppDto } from './dtos/create-app.dto';
import { UpdateAppDto } from './dtos/update-app.dto';
import { App } from '../shared/schema/app';
export declare class AppsService {
    private readonly appModel;
    constructor(appModel: Model<App>);
    createThirdPartyApp(appDto: CreateAppDto): Promise<App>;
    getApps(): Promise<App[]>;
    toggleApp(id: string): Promise<void>;
    updateApp(id: string, updateApp: UpdateAppDto): Promise<App>;
}
