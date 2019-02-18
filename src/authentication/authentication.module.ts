import {Module} from '@nestjs/common';
import {UserService} from '../user.service';
import {AuthenticationAdapter} from './authentication-adapter.service';

@Module({
    providers: [
        AuthenticationAdapter,
        UserService,
    ],
    exports: [
        AuthenticationAdapter,
    ],
})
export class AuthenticationModule {
}
