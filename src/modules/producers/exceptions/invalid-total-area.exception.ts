import { NotFoundException } from '@nestjs/common';

class InvalidTotalAreaException extends NotFoundException {
    public constructor() {
        super(`A soma da área arável e da área de vegetação deve ser igual a área total`);
    }
}

export default InvalidTotalAreaException;
