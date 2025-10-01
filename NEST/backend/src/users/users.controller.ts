import { Body, Controller, Post, Param, Get, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { ParseIntPipe } from '@nestjs/common';

// Aquí creamos las rutas
@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) { }

  // Principios de una ApiRest hay 4 tipos de petición
  // /Get -> Obtener
  // /Post -> Crear
  // /Put Patch -> Actualizar
  // /Delete -> Borrar

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.UsersService.create(user);
  }

  // Obtener todos los usuarios
  @Get()
  async findAll(): Promise<User[]> {
    return this.UsersService.findAll();
  }

  // Obtener un usuario por ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.UsersService.findOne(id);
  }

    @Put(':id')
    async update(
        // Aplica ParseIntPipe para asegurar que 'id' es un número
        @Param('id', ParseIntPipe) id: number, 
        // Extrae el cuerpo de la petición (JSON)
        @Body() updateUserDto: UpdateUserDto,
    ) {
        // Llama al método 'update' definido en el servicio
        return this.UsersService.update(id, updateUserDto);
    }

}