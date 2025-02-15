import { Module, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [
    JwtModule.register({
      secret: "liacantik190824"
    }),
    ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}