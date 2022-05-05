class InvalidTotalAreaException {
    private message: string;

    public constructor(message: string) {
        this.message = message;
    }

    public getMessage() {
        return this.message;
    }
}

export default InvalidTotalAreaException;
