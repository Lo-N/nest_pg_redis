import { Body, Controller, HttpCode, HttpStatus, Post, Put } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { Public } from 'src/decorators/route.decorator';
import { AuthDto } from 'src/dto/auth.dto';
import { RegistrationDto } from 'src/dto/registration.dto';
import { ResetPasswordDto } from 'src/dto/resetPassword.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('sign_in')
  signIn(@Body() signInDto: AuthDto) {
    return this.authService.signIn(signInDto.login, signInDto.password);
  }

  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post('sign_up')
  register(@Body() registrationDto: RegistrationDto) {
    return this.authService.signUp(registrationDto);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Put('password_reset')
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto);
  }
}
