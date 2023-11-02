export class PasswordValidator {


    private isLongEnough(password: string): boolean {
        return password.length >= 8;
    }

    private validateCase(password: string): boolean {
        return /[A-Z][a-z]/.test(password);
    }
    public validate(password: string): boolean {
        return this.isLongEnough(password) && this.validateCase(password);
    }
}

