import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { Type } from '../shared/utility/methods';
import { User } from '../shared/schema/user';
import { userType } from '../shared/utility/types';
import { TypeGuard } from '../guards/type.guard';
import { AuthService } from './auth.service';
import { VerifyOTPDto } from './dto/verify-otp.dto';
import { UserAuthGuard } from '../guards/auth-user.guard';
import { AuthByAdminDto } from './dto/auth-by-admin';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { SigninCredentialDto } from './dto/signin-auth.dto';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'signup new user' })
  async signup(@Body() authCredentialDto: AuthCredentialDto) {
    return await this.authService.Signup(authCredentialDto);
  }

  @Post('signin')
  @ApiOperation({ summary: 'signin user' })
  async signin(@Body() signinCredentialDto: SigninCredentialDto) {
    return await this.authService.Signin(signinCredentialDto);
  }

  @Post('admin')
  @Type([userType.SuperAdmin, userType.Admin])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'create new user' })
  async registerUserByAdmin(@Body() authByAdminDto: AuthByAdminDto) {
    return await this.authService.registerUserByAdmin(authByAdminDto);
  }

  @Post('verify-otp')
  @UseGuards(UserAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'verify user account' })
  async verifyOTP(@Body() verifyotp: VerifyOTPDto, @Request() req) {
    const user: User = req.user;
    return await this.authService.verifyOTP(verifyotp, user);
  }
}
