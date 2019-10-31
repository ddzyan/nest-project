import { IsNotEmpty } from 'class-validator';

export class DelCatDto {
  @IsNotEmpty()
  readonly id: string;
}
