import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.userService.create(createUserDto)
    }

    @Get() 
    getAll() { 
        return this.userService.getAll()
    }

    @Get(":id")
    getUser(@Param() params) {
        return this.userService.getUser(params.id)
    }

    @Put(":id")
    updateUser(@Param() param, @Body() dataForUpdate) {
        return this.userService.updateUser(param.id, dataForUpdate)
    }


}
//user :== createUser, loginUser