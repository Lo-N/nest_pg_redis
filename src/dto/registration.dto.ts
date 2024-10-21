import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Max } from 'class-validator';

export class RegistrationDto {
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  @IsInt()
  @Max(100)
  age: number;
}
