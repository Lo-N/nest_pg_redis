import { Injectable } from '@nestjs/common';
import { RegistrationDto } from 'src/dto/registration.dto';
import { ResetPasswordDto } from 'src/dto/resetPassword.dto';

@Injectable()
export class AuthService {
  constructor() {}

  async signIn(incomingLogin: string, pass: string) {
    return 'signIn'
  }

  async signUp(userData: RegistrationDto) {
    return 'signUp'
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    return 'resetPassword'
  }
}
