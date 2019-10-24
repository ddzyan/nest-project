import { IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  // 参数验证
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly age: number;
  @IsNotEmpty()
  readonly breed: string;
}
