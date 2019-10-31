import { IsNotEmpty } from 'class-validator';

/**
 * 验证create接口传入的参数
 *
 */
export class CreateCatDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly age: number;
  @IsNotEmpty()
  readonly breed: string;
}
