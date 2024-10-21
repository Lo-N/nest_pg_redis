import { Controller, HttpCode, HttpStatus, Post, Put } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { Public } from 'src/decorators/route.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('sign_in')
  signIn() {
    return this.authService.signIn();
  }

  // Addition
  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post('sign_up')
  register() {
    return this.authService.signUp();
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Put('password_reset')
  resetPassword() {
    return this.authService.resetPassword();
  }
}
