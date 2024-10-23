import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PurchaseController } from 'src/controllers/purchase.controller';
import { Purchase } from 'src/models/purchase.model';
import { PurchaseService } from 'src/services/purchase.service';
import { UserModule } from './user.module';
import { ItemModule } from './item.module';

@Module({
  imports: [SequelizeModule.forFeature([Purchase]), UserModule, ItemModule],
  controllers: [PurchaseController],
  providers: [PurchaseService],
  exports: [PurchaseService],
})
export class PurchaseModule {}
