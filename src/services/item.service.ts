import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Item } from 'src/models/item.model';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item) private itemRepository: typeof Item) {}

  async getAllItems() {
    return this.itemRepository.findAll()
  }

  async getItemsByIds(ids: Array<string>): Promise<Array<Item>> {
    return this.itemRepository.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    })
  }
}
