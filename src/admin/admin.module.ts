import {Module} from '@nestjs/common';
import {AuthenticationModule} from '../authentication/authentication.module';
import {UserService} from '../user.service';
import {AdminController} from './admin.controller';

@Module({
    imports: [
        AuthenticationModule,
    ],
    controllers: [
        AdminController,
    ],
    providers: [
        UserService,
    ],
})
export class AdminModule {
}
