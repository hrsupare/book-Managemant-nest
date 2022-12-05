import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel("user") private userModel: Model<UserDocument>) { }

    async create(userData) {
        return this.userModel.create(userData)
            .then((data) => { return data })
            .catch((err) => { console.log(err) })
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
            .then((data) => { return data })
            .catch((err) => { console.log(err) })

    }
}
