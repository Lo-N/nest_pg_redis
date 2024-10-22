import { Module } from '@nestjs/common';
import { AppController } from '../controllers/healthCheck.controller';
import { AppService } from '../services/healthCheck.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { DataBaseConfig } from 'src/db/config';
import { AuthModule } from './auth.module';
import { ItemModule } from './item.module';
import { PurchaseModule } from './purchase.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    AuthModule,
    ItemModule,
    PurchaseModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot(DataBaseConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
