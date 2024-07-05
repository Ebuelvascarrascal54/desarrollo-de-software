import { IsOptional, IsString } from 'class-validator';

export class UpdateVehiculoDto {
  @IsOptional()
  @IsString()
  placa?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  modelo?: string;
}
