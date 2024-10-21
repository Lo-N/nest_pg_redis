import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from 'src/controllers/healthCheck.controller';
import { AppService } from 'src/services/healthCheck.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.healthCheck()).toBe('Hello World!');
    });
  });
});
