import { Controller, Post, Body, Get, Param, Put, UsePipes, ValidationPipe, Header, Response, HttpStatus, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, ParamsId, UpdateUserDto, LoginUserDto } from './dto/user.dto';
import { AuthGuard } from 'src/guard/auth.guard';
import * as dotenv from 'dotenv' 
dotenv.config()


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.userService.create(createUserDto)
    }

    @Post("login")
    @UsePipes(ValidationPipe)
    login(@Body() loginUserDto: LoginUserDto,) {
        return this.userService.login(loginUserDto)
            .then((data) => { return data })
            .catch((err) => { return err })
    }

    @Get()
    @UseGuards(AuthGuard)
    getAll() {
        return this.userService.getAll()
    }

    @Get(":id")
    @UsePipes(ValidationPipe)
    getUser(@Param() paramsId: ParamsId) {
        return this.userService.getUser(paramsId.id)
    }

    @Put(":id")
    @UsePipes(ValidationPipe)
    updateUser(@Param() paramsId: ParamsId, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(paramsId.id, updateUserDto)
    }


}
//user :== createUser, loginUser