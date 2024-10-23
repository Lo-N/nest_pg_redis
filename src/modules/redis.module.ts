import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async () => ({
        ttl: 60 * 10, // 10 minutes
        store: await redisStore({
          socket: {
            host: process.env.REDIS_CONTAINER,
            port: Number(process.env.REDIS_PORT),
          },
        }),
      }),
      isGlobal: true,
    }),
  ],
})
export class RedisModule {}
