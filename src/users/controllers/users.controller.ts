import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersSevice: UsersService) {}
    
    @Get('say-hello')
    getHello(): string {
        return this.UsersSevice.getHello();
    }
}
