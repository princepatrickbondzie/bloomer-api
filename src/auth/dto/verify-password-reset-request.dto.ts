import { IsString, IsNotEmpty } from 'class-validator';

export class VerifyPasswordResetRequest {
  @IsString()
  @IsNotEmpty()
  readonly otp: string;
}
