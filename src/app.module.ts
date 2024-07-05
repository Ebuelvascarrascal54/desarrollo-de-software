import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreaModule } from './area/area.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { AdminModule } from './admin/admin.module';
import { VehiculoModule } from './vehiculos/vehiculo.module';
import { MascotaModule } from './mascota/mascota.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://galeanofabio055:12345qwert@ac-t4sll0w-shard-00-00.xrpso49.mongodb.net:27017,ac-t4sll0w-shard-00-01.xrpso49.mongodb.net:27017,ac-t4sll0w-shard-00-02.xrpso49.mongodb.net:27017/practica?replicaSet=atlas-uawy80-shard-0&ssl=true&authSource=admin'),  
    AreaModule, 
    UsuarioModule, 
    ClienteModule, 
    AdminModule, 
    VehiculoModule, 
    MascotaModule, AuthModule, 
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

