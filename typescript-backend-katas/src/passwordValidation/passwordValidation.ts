abstract class IPasswordValidator {
    abstract rules: ((password: string) => boolean)[]
    abstract readonly passwordMinLength: number

    protected containsANumber = (password: string) => /\d/.test(password)

    protected isPasswordLongEnough = (password: string) => password.length >= this.passwordMinLength;

    protected containsAnUppercase = (password: string) => /[A-Z]/.test(password)

    protected containsAnUnderscore = (password: string) => password.indexOf('_') >= 0

    protected containsALowercase = (password: string) => /[a-z]/.test(password)

    isValid(password: string): boolean {
        return this.rules.every((rule) => rule(password))
    }
}

export class PasswordValidator extends IPasswordValidator {
    passwordMinLength = 8

    rules = [
        this.isPasswordLongEnough,
        this.containsALowercase,
        this.containsANumber,
        this.containsAnUnderscore,
        this.containsAnUppercase
    ]
}

export class SimplePasswordValidator extends IPasswordValidator {
    passwordMinLength = 6

    rules = [
        this.isPasswordLongEnough,
        this.containsAnUppercase,
        this.containsALowercase,
        this.containsANumber,
    ]
}
