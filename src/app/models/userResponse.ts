import { User } from '@app/models';

export class UserResponse extends Response{
    data: User[];
}