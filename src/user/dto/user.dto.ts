import { IsEmpty, IsEmail } from "class-validator";

export class CreateUserDto {
    @IsEmpty()
    fName: string;

    @IsEmpty()
    lName: string;

    @IsEmail()
    email: string;

    @IsEmpty()
    password: string;
}
