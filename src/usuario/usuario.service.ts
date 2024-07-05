import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { usuario } from './schema/usuario.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsuarioService {
  constructor(@InjectModel(usuario.name) private usuarioModel: Model<usuario>) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const createdUsuario = new this.usuarioModel(createUsuarioDto);
    return createdUsuario.save();
  }

  async findAll() {
    return this.usuarioModel.find().exec();
  }

  async findOne(id: string) {
    return this.usuarioModel.findById(id).exec();
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDto, { new: true }).exec();
  }

  async remove(id: string) {
    return this.usuarioModel.findByIdAndDelete(id).exec();
  }
}
