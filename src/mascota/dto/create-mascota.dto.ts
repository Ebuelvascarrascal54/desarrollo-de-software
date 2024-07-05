import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateMascotaDto {
  @IsNotEmpty()
  @IsString()
  raza: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsInt()
  edad: number;
}

