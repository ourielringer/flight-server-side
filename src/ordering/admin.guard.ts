import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private reflector: Reflector) {}
  
  canActivate(context: ExecutionContext): boolean{
    
    const rolse = this.reflector.get<string[]>('rolse', context.getHandler());
    console.log(rolse);
    
    if (!rolse) {
      return true;
    }
    const request = context.switchToHttp().getRequest().query.rolse;
    console.log(request);
    
    console.log('guard',rolse == request);
    
    return rolse == request
  }
  
}
