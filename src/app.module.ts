import { Module } from '@nestjs/common';
import {AdminModule} from './admin/admin.module';
import { AppService } from './app.service';

@Module({
  imports: [
      AdminModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
