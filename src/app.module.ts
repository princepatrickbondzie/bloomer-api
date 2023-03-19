import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AppsModule } from './apps/apps.module';
import { Config } from './config/Config';
import { AddressModule } from './address/address.module';
import { AuthModule } from './auth/auth.module';
import { BusinessModule } from './business/business.module';
import { ServicesModule } from './services/services.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    MongooseModule.forRoot(Config.MONGODB_URL),
    AppsModule,
    AuthModule,
    UserModule,
    AddressModule,
    BusinessModule,
    ServicesModule,
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
