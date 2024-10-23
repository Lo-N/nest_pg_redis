import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { BadGatewayException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Item } from 'src/models/item.model';
import { Cache } from 'cache-manager';
import axios, { HttpStatusCode } from 'axios';
import { IIncomingItem } from 'src/interfaces/incomingItem.interface';
import { UserErrorMessages } from 'src/utils/userErrorMessages.utils';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel(Item) private itemRepository: typeof Item,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async getExternalItems(): Promise<IIncomingItem[]> {
    const cacheData = await this.cacheManager.get<IIncomingItem[]>('items');
    if (cacheData) {
      console.log('Items were taken from the cache')
      return cacheData
    } 

    try {
      const { data, status } = await axios.get<IIncomingItem[]>('https://api.skinport.com/v1/items');

      if (status !== HttpStatusCode.Ok) {
        throw new BadGatewayException(UserErrorMessages.UPSTREAM_SERVER_ERROR())
      }
      
      // TODO: change incoming item fields
      await this.cacheManager.set('items', data.map((item) => item));
      console.log('Items were saved to the cache');
  
      return data
    } catch (error) {
      console.warn(`An error occur at ${this.getExternalItems.name}`, error);
      throw error
    }
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
