import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [UserModule, MongooseModule.forRoot("mongodb+srv://hsupare:2kZE1zdHBT5kzVVm@cluster0.5drhi.mongodb.net/himanshu-DB")],
})
export class AppModule { }
