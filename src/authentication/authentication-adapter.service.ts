import {Injectable} from '@nestjs/common';
import {UserService} from '../user.service';

@Injectable()
export class AuthenticationAdapter {
    constructor(
        private readonly userService: UserService,
    ) {
    }

    public isAdmin(): boolean {
        return this.userService.getUserName() === 'Peter';
    }
}
