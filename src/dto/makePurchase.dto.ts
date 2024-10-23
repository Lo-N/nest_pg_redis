import { IsArray, IsNotEmpty } from 'class-validator';

export class MakePurchaseDto {
  @IsArray()
  @IsNotEmpty()
  items: Array<{ itemId: string; quantity: number }>;
}
