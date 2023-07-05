import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './roles.enum';
import { ExtractJwt } from 'passport-jwt';
import jwtDecode from 'jwt-decode';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!roles) {
      return true;
    } else {
      const user: User = jwtDecode(
        ExtractJwt.fromAuthHeaderAsBearerToken()(
          context.switchToHttp().getRequest(),
        ).toString(),
      );

      return roles.some((role) => user.role?.includes(role));
    }
  }
}
