import { IsEmail, IsNotEmpty, IsString, } from "class-validator"

export class CreateUsuarioDto {
    
    @IsNotEmpty()
    @IsString()
  
    nombre :string
   
    @IsNotEmpty()
    @IsString()
    apellido : string
   
    @IsNotEmpty()
    @IsString()
    celular :string
   
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    correo : string
}
