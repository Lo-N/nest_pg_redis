import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/decorators/route.decorator';
import { ItemService } from 'src/services/item.service';

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Public()
  @Get()
  getAllItems() {
    return this.itemService.getExternalItems();
  }
}
