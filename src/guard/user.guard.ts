import { Injectable } from '@nestjs/common';

@Injectable()
export class UserGuard {
  canActivate(context) {
    console.log(context.switchToHttp().getRequest())
    return true;
  }
}
