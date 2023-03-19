import { User } from '../shared/schema/user';
import { Model } from 'mongoose';
import { Response } from '../shared/utility/types';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtPayload } from './dto/jwt-payload.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { VerifyOTPDto } from './dto/verify-otp.dto';
import { AuthByAdminDto } from './dto/auth-by-admin';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { SigninCredentialDto } from './dto/signin-auth.dto';
import { ToggleUserActivationDto } from './dto/toggle-user-activate.dto';
import {
  generateHashPassword,
  comparePassword,
} from '../shared/utility/password-manager';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async Signup(authCredentialDto: AuthCredentialDto): Promise<Response> {
    const { email, contact } = authCredentialDto;
    try {
      //check if email is already registered
      const user = await this.userModel.findOne({ email });
      if (user) {
        throw new BadRequestException('Email already registered');
      }

      //check if phone number is already registered
      // const exist = await this.userModel.findOne({ contact: contact });
      // if (exist) {
      //   throw new BadRequestException('Phone number already registered');
      // }

      //generate the hash password
      authCredentialDto.password = await generateHashPassword(
        authCredentialDto.password,
      );

      //generate the otp token
      const otp = Math.random().toString().substr(2, 4);

      const otpEpiryTime = new Date();
      otpEpiryTime.setMinutes(otpEpiryTime.getMinutes() + 10);

      const newUser = await this.userModel.create({
        ...authCredentialDto,
        otp,
        otpEpiryTime,
      });

      const payload: JwtPayload = {
        email,
      };
      const token = this.createToken(payload);

      return {
        success: true,
        message: 'User created successfully',
        status: 201,
        data: {
          id: newUser._id,
          firstname: newUser.firstname,
          lastname: newUser.lastname,
          email: newUser.email,
          contact: newUser.contact,
          dob: newUser.dob,
          type: newUser.type,
          token,
        },
      };
    } catch (err) {
      throw err;
    }
  }

  async Signin(signinCredentialDto: SigninCredentialDto): Promise<Response> {
    const { email, password } = signinCredentialDto;
    try {
      const user = await this.userModel.findOne({ email });
      if (!user) {
        return {
          success: false,
          message: 'Invalid email/password',
          status: 404,
          data: null,
        };
      }

      const isValid = await comparePassword(password, user.password);
      if (!isValid) {
        return {
          success: false,
          message: 'Invalid email/password',
          status: 404,
          data: null,
        };
      }

      const payload: JwtPayload = {
        email,
      };
      const token = this.createToken(payload);

      if (!user.isVerified) {
        //generate the otp token
        // const otp = Math.floor(Math.random() + 900000) + 100000;
        const otp = Math.random().toString().substr(2, 4);

        const otpEpiryTime = new Date();
        otpEpiryTime.setMinutes(otpEpiryTime.getMinutes() + 10);

        await this.userModel.findByIdAndUpdate(
          user._id,
          { otp: otp, otpEpiryTime: otpEpiryTime },
          { new: true },
        );

        return {
          success: true,
          message: 'Signed in successfully',
          status: 200,
          data: {
            message: 'User account not verified, otp sent',
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            contact: user.contact,
            dob: user.dob,
            type: user.type,
            token,
          },
        };
      }

      return {
        success: true,
        message: 'Signed in successfully',
        status: 200,
        data: {
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          contact: user.contact,
          dob: user.dob,
          type: user.type,
          token,
        },
      };
    } catch (err) {
      throw err;
    }
  }

  async registerUserByAdmin(authByAdminDto: AuthByAdminDto): Promise<Response> {
    const { email, contact } = authByAdminDto;
    try {
      //check if email is already registered
      const user = await this.userModel.findOne({ email: email });
      if (user) {
        return {
          success: false,
          message: 'Email already registered',
          status: 400,
          data: null,
        };
      }

      //check if phone number is already registered
      const exist = await this.userModel.findOne({ contact: contact });
      if (exist) {
        return {
          success: false,
          message: 'Phone number already registered',
          status: 400,
          data: null,
        };
      }

      //generate the hash password
      // const salt = bcrypt.genSaltSync(10);
      authByAdminDto.password = await generateHashPassword(
        authByAdminDto.password,
      );

      //generate the otp token
      const otp = Math.floor(Math.random() + 900000) + 100000;

      const otpEpiryTime = new Date();
      otpEpiryTime.setMinutes(otpEpiryTime.getMinutes() + 10);

      const newUser = await this.userModel.create({
        ...authByAdminDto,
        otp,
        otpEpiryTime,
      });

      const payload: JwtPayload = {
        email,
      };
      const token = this.createToken(payload);

      return {
        success: true,
        message: 'User created successfully',
        status: 201,
        data: {
          id: newUser._id,
          firstname: newUser.firstname,
          lastname: newUser.lastname,
          email: newUser.email,
          contact: newUser.contact,
          dob: newUser.dob,
          type: newUser.type,
          token,
        },
      };
    } catch (err) {
      throw err;
    }
  }

  async verifyOTP(verifyotp: VerifyOTPDto, user: User): Promise<Response> {
    const data = await this.userModel.findOne({ _id: user._id });
    if (data.isVerified) {
      return {
        success: false,
        message: 'User account already verified',
        status: 400,
      };
    }

    if (data.otp === verifyotp.otp) {
      await this.userModel.findByIdAndUpdate(
        user._id,
        { isVerified: true },
        { new: true },
      );

      return {
        success: true,
        message: 'User account verified',
        status: 200,
      };
    } else {
      return {
        success: false,
        message: 'OTP is invalid',
        status: 400,
      };
    }
  }

  private createToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  async deactivateUser(
    deactivateDetails: ToggleUserActivationDto,
  ): Promise<User> {
    const { email } = deactivateDetails;

    let user = await this.userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException();
    }

    user.active = !user.active;
    user = await user.save();
    delete user.password;
    return user;
  }
}
