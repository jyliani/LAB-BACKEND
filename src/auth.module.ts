import { Global, Module } from "@nestjs/common";
import { AppService } from "./app.service";
import PrismaService from "./prisma";
import { JwtModule } from "@nestjs/jwt";

@Global()
@Module({
  imports: [
   
   JwtModule.register({
    secret : "liacantik190824",
    global : true

   }),
   AuthModule,
  ],
  providers: [AppService, ],
  exports: [AppService, ]
})
export class AuthModule {
}
