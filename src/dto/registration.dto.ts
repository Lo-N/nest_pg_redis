import { IsEmail, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';


export class RegistrationDto {
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt()
  @Min(20)
  @Max(100)
  age: number;
}
