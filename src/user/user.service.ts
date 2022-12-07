import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel("user") private userModel: Model<UserDocument>,
        private jwtService: JwtService
    ) { }

    async create(userData) {
        return this.userModel.create(userData)
            .then((data) => { return data })
            .catch((err) => { console.log(err) })
    }

    async login(credentials) {
        const { email, password } = credentials
        const checkUser = await this.userModel.findOne({ "email": email })
        if (!checkUser) {
            throw new HttpException({
                status: HttpStatus.UNAUTHORIZED,
                error: 'user Not found',
            }, HttpStatus.UNAUTHORIZED,);
        } else if (checkUser.password !== password) {
          
            throw new HttpException({
                status: HttpStatus.UNAUTHORIZED,
                error: 'enter your correct password',
            }, HttpStatus.UNAUTHORIZED,);
        } else {
      
            const payload = { username: checkUser.email, roles: "USER_LOGIN" }
            return {
                access_token: this.jwtService.sign(payload)
            }
        }


    }
    async getAll() {
        return this.userModel.find()
            .then((data) => { return data })
            .catch((err) => { console.log(err) })
    }

    async getUser(id) {
        return this.userModel.findById(id)
            .then((data) => { return data })
            .catch((err) => { console.log(err) })
    }

    async updateUser(id, data) {
        return this.userModel.findByIdAndUpdate({ "_id": id }, data, { new: true })
            .then((data) => { return })
            .catch((err) => { console.log(err) })

    }
}
