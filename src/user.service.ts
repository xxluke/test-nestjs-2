import {Injectable} from '@nestjs/common';

@Injectable()
export class UserService {
    public getUserName() {
        return 'Peter';
    }
}
