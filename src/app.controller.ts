import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  //user :== createUser, loginUser
  //books:== createBook , getBook , getBookByID , updateBook , deleteBook

}
