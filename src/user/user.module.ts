import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: "user", schema: UserSchema }]), JwtModule.register({
        secret: process.env.SECRET,
        signOptions: { expiresIn: "1m" }
    })],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule { }  