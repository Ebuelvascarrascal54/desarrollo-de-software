import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { usuario, usuarioSchema } from './schema/usuario.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: usuario.name, schema: usuarioSchema }])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
