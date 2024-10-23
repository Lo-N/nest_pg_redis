import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegistrationDto } from 'src/dto/registration.dto';
import { ResetPasswordDto } from 'src/dto/resetPassword.dto';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserErrorMessages } from 'src/utils/userErrorMessages.utils';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(incomingLogin: string, password: string) {
    try {
      const user = await this.userService.getUserByLogin(incomingLogin);

      if (!(await compare(password, user.password))) {
        throw new UnauthorizedException(
          UserErrorMessages.INVALID_CREDENTIALS(),
        );
      }

      return {
        access_token: await this.jwtService.signAsync({
          id: user.id,
          login: user.login,
        }),
      };
    } catch (error) {
      console.warn(`An error occur at ${this.signIn.name}`, error);
      throw error;
    }
  }

  async signUp(userData: RegistrationDto) {
    try {
      const { id, login } = await this.userService.createUser(userData);

      return {
        access_token: await this.jwtService.signAsync({ id, login }),
      };
    } catch (error) {
      console.warn(`An error occur at ${this.signUp.name}`, error);
      throw error;
    }
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    try {
      const user = await this.userService.getUserByLoginAndEmail({
        login: resetPasswordDto.login,
        email: resetPasswordDto.email,
      });

      const updatedUser = await this.userService.updateUser(
        user,
        resetPasswordDto,
      );

      return {
        access_token: await this.jwtService.signAsync({
          id: updatedUser.id,
          login: updatedUser.login,
        }),
      };
    } catch (error) {
      console.warn(`An error occur at ${this.resetPassword.name}`, error);
      throw error;
    }
  }
}
