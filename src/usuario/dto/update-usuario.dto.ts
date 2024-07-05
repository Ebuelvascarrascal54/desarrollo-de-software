import { IsEmail, IsString, IsOptional } from 'class-validator';

export class UpdateUsuarioDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  apellido?: string;

  @IsOptional()
  @IsString()
  celular?: string;

  @IsOptional()
  @IsEmail()
  correo?: string;
}
