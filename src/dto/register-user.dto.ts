import { ApiProperty } from "@nestjs/swagger";
import { IsString, matches, length,IsNotEmpty, Matches, Length } from "class-validator";

export class RegisterUserDto {
    
   @ApiProperty({
    description:"username",
    type: String,
    example: "LIA",

   })
   @IsString()
   @IsNotEmpty()
   @Matches(/^\S*$/i)
   @Length(1,30)
    username: string;

       
   @ApiProperty({
    description:"password",
    type: String,
    example: "password",

   })
   @IsString()
   @IsNotEmpty()
   @Matches(/^\S*$/i)
   @Length(1,30)
    password: string;
}