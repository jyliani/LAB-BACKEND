import { Body, Controller, Delete, Get, Post,Param,Put, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { createMahasiswaDTO } from './dto/create-Mahasiswa.dto';
import { UpdteMahasiswaDTO } from './dto/update-mahasiswa.dto';
import prisma from './prisma';
import { RegisterUserDto } from './dto/register-user.dto';
import { Response,  } from 'express';
import { plainToInstance } from 'class-transformer';
import { User } from './entity/user.entity';
import { UserDecorator } from './user.decorator';
import { AuthGuard } from './auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post("Mahasiswa")
  @ApiBody({type : createMahasiswaDTO})
  createMahasiswa(@Body()data : createMahasiswaDTO){
    return this.appService.addMahasiswa(data);
}
@Get("mahasiswa")
getmahasiswa() {
  return this.appService.getMahasiswa();
}

 @Post ("register")
  @ApiBody({ type : RegisterUserDto})
  register(@Body()data : RegisterUserDto){
    return this.appService.register(data);
  }

  @Get("/auth")
 @UseGuards(AuthGuard)
 @ApiBearerAuth()
 auth(@UserDecorator() user : User) {
  return user
 }




//DELETE localhost:3000/mahasiswa/105841104922
 @Delete("mahasiswa/:nim")
 deletMahasiswa(@Param("nim")nim : string){
  return this.appService.deleteMahasiswa(nim);
 }


  @Put("mahasiswa/:nim")
  @ApiBody({ type : UpdteMahasiswaDTO})
  editMahasiswa(
     @Param("nim") nim : string, @Body() { nama }: UpdteMahasiswaDTO
    ) {
      return this.appService.UpdteMahasiswa(nim,nama);
     
  }
  

  @Get("mahasiswa/:nim")
  getMahasiswaByNim(@Param("nim") nim : string){
    return this.appService.getMahasiswaByNIM(nim);
  }


  //tambahan baru
  @Post("login")
  @ApiBody({
    type: RegisterUserDto
  })
   async login(@Body() data: RegisterUserDto,
    @Res({ passthrough: true }) res: Response) {
      const result = await this.appService .login(data);
       res.cookie('token', result.token, );

       result.user = plainToInstance(User, result.user);

      return result;
    
  }
}

