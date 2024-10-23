import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ItemController } from 'src/controllers/item.controller';
import { Item } from 'src/models/item.model';
import { ItemService } from 'src/services/item.service';
import { RedisModule } from './redis.module';

@Module({
  imports: [SequelizeModule.forFeature([Item]), RedisModule],
  controllers: [ItemController],
  providers: [ItemService],
  exports: [ItemService],
})
export class ItemModule {}
