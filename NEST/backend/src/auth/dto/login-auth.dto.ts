import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginAuthDto {
    @IsNotEmpty({ message: 'El campo email no puede estar vacio' })
    @IsString({ message: 'El campo email debe ser una cadena de texto' })
    @IsEmail({}, { message: 'El formato del email no es valido' })
    email : string;

    @IsNotEmpty({ message: 'El campo contraseña no puede estar vacio' })
    @IsString({ message: 'El campo contraseña debe ser una cadena de texto' })
    password : string;
}


