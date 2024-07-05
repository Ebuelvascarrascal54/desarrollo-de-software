import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type usuarioDocument = HydratedDocument<usuario>;

@Schema()
export class usuario {
  @Prop()
  nombre: string;

  @Prop()
  apellido: string;

  @Prop()
  celular: string;

  @Prop()
  correo: string;
}

export const usuarioSchema = SchemaFactory.createForClass(usuario);