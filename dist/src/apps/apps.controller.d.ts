import { App } from '../shared/schema/app';
import { CreateAppDto } from './dtos/create-app.dto';
import { UpdateAppDto } from './dtos/update-app.dto';
import { AppsService } from './apps.service';
export declare class AppsController {
    private readonly appsService;
    constructor(appsService: AppsService);
    createApp(appDto: CreateAppDto): Promise<App>;
    getApps(): Promise<App[]>;
    deactivateApp(id: string): Promise<void>;
    updateThirdPartyApp(id: string, updateAppDto: UpdateAppDto): Promise<App>;
}
