import { Module } from '@nestjs/common';
import { AppController } from '../controllers/healthCheck.controller';
import { AppService } from '../services/healthCheck.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { DataBaseConfig } from 'src/db.config';
import { AuthModule } from './auth.module';
import { ItemModule } from './item.module';
import { PurchaseModule } from './purchase.module';
import { UserModule } from './user.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/guards/auth.guard';

@Module({
  imports: [
    AuthModule,
    ItemModule,
    PurchaseModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot(DataBaseConfig),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_TTL },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
