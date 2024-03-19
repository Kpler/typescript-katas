interface PasswordResponse {}

export class ValidPasswordResponse implements PasswordResponse {
    readonly result: boolean = true
}

export class InValidPasswordResponse implements PasswordResponse {
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

    validatePassword(password: string): ValidPasswordResponse | InValidPasswordResponse  {
        const isValid = this.rules.every((rule) => rule(password))

        return isValid ? new ValidPasswordResponse() : new InValidPasswordResponse(["Wrong Password"]);
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
