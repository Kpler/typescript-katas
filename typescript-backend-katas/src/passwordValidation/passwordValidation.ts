export class PasswordValidator {
    public validate(password: string): boolean {
        return this.isLongEnough(password) && this.validateCase(password) && this.containNumber(password);
    }

    private isLongEnough(password: string): boolean {
        return password.length >= 8;
    }

    private validateCase(password: string): boolean {
        return /[A-Z]/.test(password) && /[a-z]/.test(password);
    }

    private containNumber(password: string): boolean {
        return /[0-9]/.test(password);
    }
}

