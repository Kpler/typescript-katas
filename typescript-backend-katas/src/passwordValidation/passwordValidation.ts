export class PasswordValidator {
    public validate(password: string): boolean {
        return this.isLongEnough(password) && this.validateCase(password) && this.containNumber(password) && this.containsUnderscore(password);
    }

    private isLongEnough(password: string): boolean {
        return password.length >= 8;
    }

    private validateCase(password: string): boolean {
        return /(?=.*[a-z])(?=.*[A-Z])/.test(password);
    }

    private containNumber(password: string): boolean {
        return /[0-9]/.test(password);
    }

    private containsUnderscore(password: string): boolean {
        return /[_]/.test(password);
    }
}

