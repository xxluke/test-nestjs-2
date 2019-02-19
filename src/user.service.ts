import {Injectable} from '@nestjs/common';

@Injectable()
export class UserService {
    constructor() {
        console.log('Instantiated UserService');
    }

    public getUserName() {
        fail('CALLED GETUSERNAME');
        console.log('FAIL');
        return 'Peter';
    }
}
