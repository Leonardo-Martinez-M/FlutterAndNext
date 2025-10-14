import { Injectable } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './jwt-contants';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
constructor(){
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration:false,
        secretOrKey:jwtConstants.secret,
    });
}
//El parámetro payload representa el contenido decodificado del JWT
// , es decir, los datos que estaban dentro del token.
async validate(payload:any){
    return {userId:payload.id, username:payload.name,roles:payload.roles};
}
}

