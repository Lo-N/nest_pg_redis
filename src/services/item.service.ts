import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
  constructor() {}

  async getAllItems() {
    return ['item']
  }
}
