import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterAuthDto {
    
    @IsNotEmpty({ message: 'El campo nombre no puede estar vacio' })
    @IsString({ message: 'El campo nombre debe ser una cadena de texto' })
    name: string

    @IsNotEmpty({ message: 'El campo apellido no puede estar vacio' })
    @IsString({ message: 'El campo apellido debe ser una cadena de texto' })
    lastname: string

    @IsNotEmpty({ message: 'El campo email no puede estar vacio' })
    @IsString({ message: 'El campo email debe ser una cadena de texto' })
    @IsEmail({}, { message: 'El formato del email no es valido' })
    email: string

    @IsNotEmpty({ message: 'El campo telefono no puede estar vacio' })
    @IsString({ message: 'El campo telefono debe ser una cadena de texto' })
    phone: string

    @IsNotEmpty({ message: 'El campo contraseña no puede estar vacio' })
    @IsString({ message: 'El campo contraseña debe ser una cadena de texto' })
    @MinLength(6, { message: 'La contraseña debe tener minimo 6 caracteres' })
    password : string
}