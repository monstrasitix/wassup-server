// Core
import { Injectable } from '@nestjs/common';

// Interfaces
import { Maybe } from '../interfaces';
import { User } from './users.model';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async find(username: string): Promise<Maybe<User>> {
        return this.userRepository.findOne({
            where: { username },
        });
    }

    async all(): Promise<Array<User>> {
        return this.userRepository.find();
    }
}
