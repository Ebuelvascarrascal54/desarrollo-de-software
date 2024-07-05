import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Mascota, MascotaDocument } from './schema/mascota.schema';

@Injectable()
export class MascotaService {
  constructor(@InjectModel(Mascota.name) private mascotaModel: Model<MascotaDocument>) {}

  async create(createMascotaDto: CreateMascotaDto): Promise<Mascota> {
    const createdMascota = new this.mascotaModel(createMascotaDto);
    return createdMascota.save();
  }

  async findAll(): Promise<Mascota[]> {
    return this.mascotaModel.find().exec();
  }

  async findOne(id: string): Promise<Mascota> {
    const mascota = await this.mascotaModel.findById(id).exec();
    if (!mascota) {
      throw new NotFoundException(`Mascota with ID ${id} not found`);
    }
    return mascota;
  }

  async update(id: string, updateMascotaDto: UpdateMascotaDto): Promise<Mascota> {
    const updatedMascota = await this.mascotaModel.findByIdAndUpdate(id, updateMascotaDto, { new: true }).exec();
    if (!updatedMascota) {
      throw new NotFoundException(`Mascota with ID ${id} not found`);
    }
    return updatedMascota;
  }

  async remove(id: string): Promise<Mascota> {
    const mascota = await this.mascotaModel.findByIdAndDelete(id).exec();
    if (!mascota) {
      throw new NotFoundException(`Mascota with ID ${id} not found`);
    }
    return mascota;
  }
}
