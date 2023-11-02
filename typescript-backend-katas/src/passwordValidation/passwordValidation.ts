export class PasswordValidator {

    private containsUppercase(password: string): boolean {
        return /[A-Z]/.test(password);
    }

    private isLongEnough(password: string): boolean {
        return password.length >= 8;
    }
    public validate(password: string): boolean {
        return this.isLongEnough(password) && this.containsUppercase(password);
    }
}

