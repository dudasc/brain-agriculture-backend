import { NotFoundException } from '@nestjs/common';

class UserAlreadyExistsException extends NotFoundException {
    public constructor() {
        super(`CPF informado já existe`);
    }
}

export default UserAlreadyExistsException;
