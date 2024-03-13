abstract class IPasswordValidator {
    abstract rules: ((password: string) => boolean)[]
    protected containsANumber = (password: string) => /\d/.test(password)

    abstract function isPasswordLongEnough (password: string) => Boolean

    protected containsAnUppercase = (password: string) => /[A-Z]/.test(password)

    protected containsAnUnderscore = (password: string) => password.indexOf('_') >= 0

    protected containsALowercase = (password: string) => /[a-z]/.test(password)

    isValid(password: string): boolean {
        return this.rules.every((rule) => rule(password))
    }
}

export class PasswordValidator extends IPasswordValidator {
    rules = [
        this.isPasswordLongerThan,
        this.containsALowercase,
        this.containsANumber,
        this.containsAnUnderscore,
        this.containsAnUppercase
    ]
}

export class PasswordValidatorTwo extends IPasswordValidator {
    rules = [
        
    ]
}
