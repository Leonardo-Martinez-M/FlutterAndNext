import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) { }

  // método para almacenar un nuevo usuario
  create(user: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  // Retorna toda la información almacena en la base de datos
  findAll() {
    return this.usersRepository.find();
  }

  findById(id: number){
    return this.usersRepository.findOneBy({id});
  }

  
  async update(id: number, updateUserDto: UpdateUserDto) {
    const userFound = await this.usersRepository.findOneBy({
      id
    });

    if (!userFound) {
      return new HttpException('Usuario no existe', HttpStatus.NOT_FOUND); // O usar new NotFoundException()
    }

    const updatedUser = Object.assign(userFound, updateUserDto); // Actualizamos datos
    return this.usersRepository.save(updatedUser);
  }

  async findOne(id: string): Promise<User> {
    const userId = parseInt(id, 10); 
    if (isNaN(userId)) {
      throw new NotFoundException(`ID inválido: ${id}`);
    }
    const user = await this.usersRepository.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
    }
    return user;
  }
}

