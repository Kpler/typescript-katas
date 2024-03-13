abstract class IPasswordValidator {
    abstract rules: ((password: string) => boolean)[]
    protected containsANumber = (password: string) => /\d/.test(password)

    abstract isPasswordLongEnough (password: string) : boolean

    protected containsAnUppercase = (password: string) => /[A-Z]/.test(password)

    protected containsAnUnderscore = (password: string) => password.indexOf('_') >= 0

    protected containsALowercase = (password: string) => /[a-z]/.test(password)

    isValid(password: string): boolean {
        return this.rules.every((rule) => rule(password))
    }
}

export class PasswordValidator extends IPasswordValidator {
    isPasswordLongEnough(password: string): boolean {
        return password.length >= 8;
    }

    rules = [
        this.isPasswordLongEnough,
        this.containsALowercase,
        this.containsANumber,
        this.containsAnUnderscore,
        this.containsAnUppercase
    ]
}

export class PasswordValidatorTwo extends IPasswordValidator {
    isPasswordLongEnough(password: string): boolean {
        return password.length >= 6;
    }

    rules = [
        this.isPasswordLongEnough
    ]
}
