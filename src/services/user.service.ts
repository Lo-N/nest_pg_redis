import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { hash } from 'bcrypt';
import { RegistrationDto } from 'src/dto/registration.dto';
import { UpdateUserDto } from 'src/dto/updateUser.dto';
import { User } from 'src/models/user.model';
import { UserErrorMessages } from 'src/utils/userErrorMessages.utils';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async getUserById(id: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where: { id }});
      if (!user) {
        throw new NotFoundException(UserErrorMessages.USER_NOT_FOUND_BY_ID(id));
      }

      return user
    } catch (error) {
      console.warn(`An error occur at ${this.getUserById.name}`, error);
      throw error
    }
  }

  async getUserByLogin(login: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where: { login }});
      if (!user) {
        throw new NotFoundException(UserErrorMessages.USER_NOT_FOUND_BY_LOGIN(login));
      }
      
      return user
    } catch (error) {
      console.warn(`An error occur at ${this.getUserByLogin.name}`, error);
      throw error
    }
  }

  async getUserByLoginAndEmail(where: { login: string, email: string }): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where })
      if (!user) {
        throw new NotFoundException(UserErrorMessages.USER_NOT_FOUND());
      }
      
      return user
    } catch (error) {
      console.warn(`An error occur at ${this.getUserByLoginAndEmail.name}`, error);
      throw error
    }
  }

  async createUser(userData: RegistrationDto): Promise<User> {
    try {
      const user = await this.userRepository.create({
        ...userData,
        password: await hash(userData.password, 10),
      });
      
      return user
    } catch (error) {
      console.warn(`An error occur at ${this.createUser.name}`, error);
      throw new BadRequestException(UserErrorMessages.USER_UNABLE_TO_CREATE());
    }
  }

  async updateUser(user: User, data: UpdateUserDto): Promise<User> {
    try {
      Object.assign(user, data);
      return user.save();
    } catch (error) {
      console.warn(`An error occur at ${this.updateUser.name}`, error);
      throw new BadRequestException(UserErrorMessages.USER_UNABLE_TO_UPDATE(user.id));
    }
  }

}
