import { Module } from '@nestjs/common';
import { ItemController } from 'src/controllers/item.controller';
import { ItemService } from 'src/services/item.service';

@Module({
  imports: [],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
