import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MascotaDocument = Mascota & Document;

@Schema()
export class Mascota {
  @Prop()
  raza: string;

  @Prop()
  color: string;

  @Prop()
  edad: number;
}

export const MascotaSchema = SchemaFactory.createForClass(Mascota);
