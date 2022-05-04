import { NotFoundException } from '@nestjs/common';

class UserAlreadyExistsException {
    private message: string;

    public constructor(message: string) {
        this.message = message;
    }

    public getMessage() {
        return this.message;
    }
}

export default UserAlreadyExistsException;
