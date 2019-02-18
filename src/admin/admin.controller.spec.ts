import {Test} from '@nestjs/testing';
import {UserService} from '../user.service';
import {AdminController} from './admin.controller';
import {AdminModule} from './admin.module';

describe('AdminController', async () => {

    let adminController: AdminController;
    let userService: UserService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [AdminModule],
        }).compile();

        adminController = module.get<AdminController>(AdminController);
        userService = module.get<UserService>(UserService);
    });

    it('should show an error message when the user isn\'t Peter', async () => {
        spyOn(userService, 'getUserName').and.returnValue('Sarah');
        expect(adminController.dashboard()).toBe('Not admin');
    });
});
