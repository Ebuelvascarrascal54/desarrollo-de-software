import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MascotaService } from './mascota.service';
import { MascotaController } from './mascota.controller';
import { Mascota, MascotaSchema } from './schema/mascota.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Mascota.name, schema: MascotaSchema }])],
  controllers: [MascotaController],
  providers: [MascotaService],
})
export class MascotaModule {}

