interface PasswordResponse {}

class ValidPasswordResponse implements PasswordResponse {
    readonly result: boolean = true
}

class InValidPasswordResponse implements PasswordResponse {
    readonly messages: Array<string>
    constructor(messages: Array<string>) {
        this.messages = messages
    }

}
abstract class IPasswordValidator {
    abstract rules: ((password: string) => boolean)[]
    
    protected containsANumber = (password: string) => /\d/.test(password)

    protected isPasswordLongEnough = (passwordLength: number) => (password: string) => password.length >= passwordLength;

    protected containsAnUppercase = (password: string) => /[A-Z]/.test(password)

    protected containsAnUnderscore = (password: string) => password.indexOf('_') >= 0

    protected containsALowercase = (password: string) => /[a-z]/.test(password)

    validatePassword(password: string): PasswordResponse {
        const isValid = this.rules.every((rule) => rule(password))

        const response = isValid ? new ValidPasswordResponse() : new InValidPasswordResponse([]);
        return  {result: isValid, message: isValid ? "Password Valid": "Wrong password"}
    }
}

export class PasswordValidator extends IPasswordValidator {
    rules = [
        this.isPasswordLongEnough(8),
        this.containsALowercase,
        this.containsANumber,
        this.containsAnUnderscore,
        this.containsAnUppercase
    ]
}

export class SimplePasswordValidator extends IPasswordValidator {
    rules = [
        this.isPasswordLongEnough(6),
        this.containsAnUppercase,
        this.containsALowercase,
        this.containsANumber,
    ]
}

export class ComplexPasswordValidator extends IPasswordValidator {
    rules = [
        this.isPasswordLongEnough(16),
        this.containsAnUppercase,
        this.containsALowercase,
        this.containsAnUnderscore,
    ]
}
