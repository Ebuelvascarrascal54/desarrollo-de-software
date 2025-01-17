import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreaService {
  areas = []
  create(createAreaDto: CreateAreaDto) {
    const { descripcion } = createAreaDto;
    this.areas.push(createAreaDto)
    console.log(this.areas)
    return 'se agrego el area correctamente ....';
  }

  findAll() {
    return this.areas;
  }

  findOne(id: number) {
    return `This action returns a #${id} area`;
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    return `This action updates a #${id} area`;
  }

  remove(id: number) {
    return `This action removes a #${id} area`;
  }
}
