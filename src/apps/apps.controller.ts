import {
  Controller,
  Post,
  UseGuards,
  Patch,
  Param,
  ParseIntPipe,
  Body,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiParam,
  ApiOperation,
} from '@nestjs/swagger';
import { userType } from 'src/shared/utility/types';
import { App } from '../shared/schema/app';
import { CreateAppDto } from './dtos/create-app.dto';
import { UpdateAppDto } from './dtos/update-app.dto';
import { AppsService } from './apps.service';
import { UserAuthGuard } from '../guards/auth-user.guard';
import { Type } from '../shared/utility/methods';
import { TypeGuard } from 'src/guards/type.guard';

@Controller('apps')
@ApiTags('Apps')
@ApiBearerAuth()
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Post()
  @Type([userType.SUPER_ADMIN])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({
    summary: 'Create a third party application',
  })
  async createApp(@Body(ValidationPipe) appDto: CreateAppDto): Promise<App> {
    return await this.appsService.createThirdPartyApp(appDto);
  }

  @Get()
  @Type([userType.SUPER_ADMIN])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({
    summary: 'Get all registered third party applications',
  })
  async getApps(): Promise<App[]> {
    return await this.appsService.getApps();
  }

  @Patch('toggle/:id')
  @Type([userType.SUPER_ADMIN])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({
    summary: 'Deactive a single third party application',
  })
  async deactivateApp(@Param('id') id: string): Promise<void> {
    return await this.appsService.toggleApp(id);
  }

  @Patch(':id')
  @Type([userType.SUPER_ADMIN])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiParam({ name: 'id', required: true })
  @ApiOperation({
    summary: 'Deactive a single third party application',
  })
  async updateThirdPartyApp(
    @Param('id', ParseIntPipe) id: string,
    updateAppDto: UpdateAppDto,
  ): Promise<App> {
    return await this.appsService.updateApp(id, updateAppDto);
  }
}
