import { Controller, Post, Body, Get } from "@nestjs/common";
import { RegisterAuthDto } from "./dto/register-auth.dto";
import { LoginAuthDto } from "./dto/login-auth.dto";
import { AuthService } from "./auth.service";
import { User } from "src/users/user.entity";
import { UsersService } from "src/users/users.service";


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //Controlador para la ruta de registro de usuario 
  @Post("register")
  register(@Body() user: RegisterAuthDto) {
    return this.authService.register(user);
  }

  @Post("login")
  login(@Body() loginData: LoginAuthDto) {
    return this.authService.login(loginData);
  }
}
