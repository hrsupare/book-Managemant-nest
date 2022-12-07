import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv'
dotenv.config()



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) { }
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    // console.log(request.headers.authorization)
    // if (!request.headers) {
      
    // }

    const ss= process.env.SECRET
    const ddata=this.jwtService.verify(request.headers.authorization )
    console.log(ddata)
    
   return true
  }

}

/*
Authorization => 'Bearer <TOKEN>'



*/