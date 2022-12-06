import { IsNotEmpty, IsEmail, IsString, MinLength, MaxLength, IsMongoId, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: "fName should not empty" })
    @IsString()
    fName: string;

    @IsNotEmpty()
    @IsString()
    lName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(15)
    password: string;
}

export class ParamsId {
    @IsMongoId()
    id: string
}

export class UpdateUserDto {

    @IsOptional()
    @IsNotEmpty({ message: "fName should not empty" })
    @IsString()
    fName: string;

    @IsOptional()
    @IsString()
    lName: string;

    @IsOptional()
    @IsEmail()
    email: string;
 
    @IsOptional()
    @MinLength(8)
    @MaxLength(15)
    password: string;
}
export class LoginUserDto{
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(15)
    password: string;
}