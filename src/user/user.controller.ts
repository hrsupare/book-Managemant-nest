import { Controller, Post, Body, Get, Param, Put, UsePipes, ValidationPipe, Header, Response, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, ParamsId, UpdateUserDto, LoginUserDto } from './dto/user.dto';

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
    @Header("X-API-TOKEN", "asdf")
    login(@Body() loginUserDto: LoginUserDto,) {
        return this.userService.login(loginUserDto)
            .then((data) => { return data })
            .catch((err) => { console.log(err) })
    }

    @Get()
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