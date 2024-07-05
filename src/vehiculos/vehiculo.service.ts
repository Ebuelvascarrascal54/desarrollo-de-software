import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { Vehiculo } from './schemas/vehiculo.shemas';
import { vehiculoDocument } from './schemas/vehiculo.shemas';

@Injectable()
export class VehiculoService {
  constructor(@InjectModel(Vehiculo.name) private vehiculoModel: Model<vehiculoDocument>) {}

  async create(createVehiculoDto: CreateVehiculoDto): Promise<Vehiculo> {
    const createdVehiculo = new this.vehiculoModel(createVehiculoDto);
    return createdVehiculo.save();
  }

  async findAll(): Promise<Vehiculo[]> {
    return this.vehiculoModel.find().exec();
  }

  async findOne(id: string): Promise<Vehiculo> {
    const vehiculo = await this.vehiculoModel.findById(id).exec();
    if (!vehiculo) {
      throw new NotFoundException(`Vehiculo with ID ${id} not found`);
    }
    return vehiculo;
  }

  async update(id: string, updateVehiculoDto: UpdateVehiculoDto): Promise<Vehiculo> {
    const updatedVehiculo = await this.vehiculoModel.findByIdAndUpdate(id, updateVehiculoDto, { new: true }).exec();
    if (!updatedVehiculo) {
      throw new NotFoundException(`Vehiculo with ID ${id} not found`);
    }
    return updatedVehiculo;
  }

  async remove(id: string): Promise<Vehiculo> {
    const deletedVehiculo = await this.vehiculoModel.findByIdAndDelete(id).exec();
    if (!deletedVehiculo) {
      throw new NotFoundException(`Vehiculo with ID ${id} not found`);
    }
    return deletedVehiculo;
  }
  async removeByPlaca(placa: string): Promise<Vehiculo> {
    const vehiculo = await this.vehiculoModel.findOneAndDelete({ placa }).exec();
    if (!vehiculo) {
      throw new NotFoundException(`Vehiculo with placa ${placa} not found`);
    }
    return vehiculo;
  }

  async removeByColor(color: string): Promise<Vehiculo> {
    const vehiculo = await this.vehiculoModel.findOneAndDelete({ color }).exec();
    if (!vehiculo) {
      throw new NotFoundException(`Vehiculo with color ${color} not found`);
    }
    return vehiculo;
  }

  async removeByModelo(modelo: string): Promise<Vehiculo> {
    const vehiculo = await this.vehiculoModel.findOneAndDelete({ modelo }).exec();
    if (!vehiculo) {
      throw new NotFoundException(`Vehiculo with modelo ${modelo} not found`);
    }
    return vehiculo;

}
async removeMultiple(criteria: any): Promise<{ deletedCount?: number }> {
  const result = await this.vehiculoModel.deleteMany(criteria).exec();
  if (result.deletedCount === 0) {
    throw new NotFoundException(`No vehiculos found matching criteria`);
  }
  return result;

}
}


