import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserAuthGuard } from '../guards/auth-user.guard';
import { Type } from '../shared/utility/methods';
import { User } from '../shared/schema/user';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from 'src/shared/schema/appointment';
import { userType } from 'src/shared/utility/types';
import { TypeGuard } from 'src/guards/type.guard';

@Controller('appointments')
@ApiTags('Appointments')
@ApiBearerAuth()
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post(':businessId')
  @UseGuards(UserAuthGuard)
  @ApiOperation({ summary: 'create new appointment' })
  async createAppointment(
    @Param('businessId') businessId: string,
    @Request() req,
    @Body() createAppointmentDto: CreateAppointmentDto,
  ): Promise<Appointment> {
    const user: User = req.user;
    return await this.appointmentsService.createAppointment(
      user,
      businessId,
      createAppointmentDto,
    );
  }

  @Get()
  @Type([userType.CustomerService, userType.SuperAdmin, userType.Admin])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'get all appointments' })
  async getAllAppointments(): Promise<Appointment[]> {
    return await this.appointmentsService.getAllAppointments();
  }

  @Get('me')
  @Type([
    userType.Client,
    userType.CustomerService,
    userType.SuperAdmin,
    userType.Admin,
  ])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'get all appointments by user' })
  async getAppointmentByUser(@Request() req): Promise<Appointment[]> {
    const user: User = req.user;
    return await this.appointmentsService.getAppointmentByUser(user);
  }

  @Get('business/:businessId')
  @Type([userType.Business])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'get all appointments by business' })
  async getAppointmentByBusiness(
    @Param('businessId') businessId: string,
  ): Promise<Appointment[]> {
    return await this.appointmentsService.getAppointmentByBusiness(businessId);
  }

  @Get(':id')
  @Type([userType.CustomerService, userType.SuperAdmin, userType.Admin])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'get one appointment' })
  async getOneAppointment(@Param('id') id: string): Promise<Appointment> {
    return await this.appointmentsService.getOneAppointment(id);
  }

  @Patch('me/:id')
  @Type([userType.Client, userType.Business])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'update appointment by user' })
  async updateAppointmentByUser(
    @Request() req,
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<Appointment> {
    const user: User = req.user;
    return await this.appointmentsService.updateAppointmentByUser(
      id,
      user,
      updateAppointmentDto,
    );
  }

  @Patch('admin/:id')
  @Type([userType.CustomerService, userType.SuperAdmin, userType.Admin])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'update appointment by admin' })
  async updateAppointmentByAdmin(
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<Appointment> {
    return await this.appointmentsService.updateAppointmentByAdmin(
      id,
      updateAppointmentDto,
    );
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.appointmentsService.remove(id);
  // }
}
