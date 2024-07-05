import { Controller, Get, Post, Body, Put, Param, Patch, Delete } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Controller('vehiculos')
export class VehiculoController {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @Post()
  create(@Body() createVehiculoDto: CreateVehiculoDto) {
    return this.vehiculoService.create(createVehiculoDto);
  }

  @Get()
  findAll() {
    return this.vehiculoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiculoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVehiculoDto: UpdateVehiculoDto) {
    return this.vehiculoService.update(id, updateVehiculoDto);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() updateVehiculoDto: UpdateVehiculoDto) {
    return this.vehiculoService.update(id, updateVehiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiculoService.remove(id);
  }
  @Delete('placa/:placa')
  removeByPlaca(@Param('placa') placa: string) {
    return this.vehiculoService.removeByPlaca(placa);

  }
  @Delete('color/:color')
  removeByColor(@Param('color') color: string) {
    return this.vehiculoService.removeByColor(color);
  }

  @Delete('modelo/:modelo')
  removeByModelo(@Param('modelo') modelo: string) {
    return this.vehiculoService.removeByModelo(modelo);
  }

  @Delete()
  removeMultiple(@Body() criteria: any) {
    return this.vehiculoService.removeMultiple(criteria);

  
  }
}


