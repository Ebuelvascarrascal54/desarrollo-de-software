import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateMascotaDto {
  @IsOptional()
  @IsString()
  raza?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsInt()
  edad?: number;
}
