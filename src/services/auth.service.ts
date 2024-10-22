import { Injectable } from '@nestjs/common';
import { RegistrationDto } from 'src/dto/registration.dto';
import { ResetPasswordDto } from 'src/dto/resetPassword.dto';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(incomingLogin: string, pass: string) {
    await this.userService.getUserById('asd')
    return 'signIn'
  }

  async signUp(userData: RegistrationDto) {
    return 'signUp'
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    return 'resetPassword'
  }
}
