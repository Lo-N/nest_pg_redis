import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RegistrationDto } from 'src/dto/registration.dto';
import { ResetPasswordDto } from 'src/dto/resetPassword.dto';
import { User } from 'src/models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async getUserById(id: string): Promise<string> {
    const data = await this.userRepository.findAll()
    console.log('DATA USER', data)
    return 'user by id'
  }

  async getUserByLogin(login: string): Promise<string> {
   return 'user by login'
  }

  async createUser(userData: RegistrationDto): Promise<string> {
    return 'new user created'
  }

  async resetPassword(id: string, resetPasswordData: ResetPasswordDto): Promise<string> {
   return 'password updated'
  }
}
