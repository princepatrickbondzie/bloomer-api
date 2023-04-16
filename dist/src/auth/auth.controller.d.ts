import { AuthService } from './auth.service';
import { VerifyOTPDto } from './dto/verify-otp.dto';
import { AuthByAdminDto } from './dto/auth-by-admin';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { SigninCredentialDto } from './dto/signin-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(authCredentialDto: AuthCredentialDto): Promise<import("../shared/utility/types").Response>;
    signin(signinCredentialDto: SigninCredentialDto): Promise<import("../shared/utility/types").Response>;
    registerUserByAdmin(authByAdminDto: AuthByAdminDto): Promise<import("../shared/utility/types").Response>;
    verifyOTP(verifyotp: VerifyOTPDto, req: any): Promise<import("../shared/utility/types").Response>;
}
