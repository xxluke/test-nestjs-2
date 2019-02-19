import {Controller, Get} from '@nestjs/common';
import {AuthenticationAdapter} from '../authentication/authentication-adapter.service';
import {UserService} from '../user.service';

@Controller('admin')
export class AdminController {
    constructor(
        private readonly authenticationAdapter: AuthenticationAdapter,
        private readonly userService: UserService,
    ) {
    }

    @Get()
    public dashboard() {
        // if (!this.authenticationAdapter.isAdmin()) {
        //     return 'Not admin';
        // }
        return `Dashboard of ${this.userService.getUserName()}`;
    }
}
