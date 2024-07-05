import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVehiculoDto {
  @IsNotEmpty()
  @IsString()
  placa: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsString()
  modelo: string;
}

