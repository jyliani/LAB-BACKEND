import { ApiBody, ApiProperty } from "@nestjs/swagger";
import { Jenis_Kelamin } from "@prisma/client";
import { IsString,IsNotEmpty,Length, isString, IsEnum } from "class-validator";

export class createMahasiswaDTO{

    @ApiProperty({ 
        description : "NIM",
        type : String,
        example : "105841104922"
    })
    @IsString()
    @IsNotEmpty()
    @Length(1,12)
    nim:string;

    @ApiProperty({ 
        description : "Nama",
        type : String,
        example : "JULIANI"
    })
    @IsString()
    @IsNotEmpty()
    @Length(1,50)
    nama:string;

    @ApiProperty({ 
        description : "Kelas",
        type : String,
        example : "5b"
    })
    @IsString()
    @IsNotEmpty()
    @Length(1,50)
    kelas:string;

    @ApiProperty({ 
        description : "Jurusan",
        type : String,
        example : "Informatika"
    })
    @IsString()
    @IsNotEmpty()
    @Length(1,50)
    jurusan:string;

    @ApiProperty({ 
        description : "Jenis Kelamin",
        enum : Jenis_Kelamin,
        example : "P"
    })
    @IsEnum(Jenis_Kelamin)
    jenis_kelamin: Jenis_Kelamin
}