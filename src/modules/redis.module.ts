import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: process.env.REDIS_CONTAINER,
            port: Number(process.env.REDIS_PORT),
          },
          ttl: 1000 * 60 * 10, // 10 minutes
        }),
      }),
      isGlobal: true,
    }),
  ],
})
export class RedisModule {}
