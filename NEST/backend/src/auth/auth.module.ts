import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
// Asume que la entidad User está en esta ruta
import { User } from 'src/users/user.entity';
// Asume que las constantes JWT están en este archivo (contiene 'secret')
import { jwtConstants } from './jwt.constans'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
  
    JwtModule.register({
      global: true, 
      secret: jwtConstants.secret,
      signOptions: { 
        expiresIn: '60s' // Tiempo de expiración del token
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
