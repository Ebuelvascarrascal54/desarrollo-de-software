import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type vehiculoDocument = HydratedDocument<Vehiculo>;

@Schema()
export class Vehiculo {
  @Prop()
  placa: string;

  @Prop()
  color: string;

  @Prop()
  modelo: string;
}

export const VehiculoSchema = SchemaFactory.createForClass(Vehiculo);
