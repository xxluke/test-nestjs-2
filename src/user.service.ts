import {Injectable} from '@nestjs/common';

@Injectable()
export class UserService {
    public getUserName() {
        fail('DOCH GETUSERNAME AUFGERUFEN');
        console.log('FAIL');
        return 'Peter';
    }
}
