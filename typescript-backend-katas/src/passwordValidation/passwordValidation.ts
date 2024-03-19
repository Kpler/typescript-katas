interface PasswordResponse {
    result: boolean
}

export class ValidPasswordResponse implements PasswordResponse {
    readonly result: boolean = true;
}

export class InValidPasswordResponse implements PasswordResponse {
    readonly result: boolean = false;
    readonly messages: Array<string>
    constructor(messages: Array<string>) {
        this.messages = messages
    }

    public addMessage(msg: string) {
        this.messages.push(msg);
    }

}
abstract class IPasswordValidator {
    abstract rules: ((password: string) => PasswordResponse)[]
    public invalidPw = new InValidPasswordResponse([])
    
    protected containsANumber = (password: string): ValidPasswordResponse | InValidPasswordResponse => {
        const containsNumber = /\d/.test(password)
        if (containsNumber) {
            return new ValidPasswordResponse()    
        }
        this.invalidPw.addMessage("Does not contain a Number")
        return this.invalidPw
    }

    protected isPasswordLongEnough = (passwordLength: number) => (password: string) => password.length >= passwordLength;

    protected containsAnUppercase = (password: string) => /[A-Z]/.test(password)

    protected containsAnUnderscore = (password: string) => password.indexOf('_') >= 0

    protected containsALowercase = (password: string) => /[a-z]/.test(password)

    validatePassword(password: string): ValidPasswordResponse | InValidPasswordResponse  {
        const isValid = this.rules.map(rule => {
            const appliedRule = rule(password);
            if (appliedRule.result === false) {
                appliedRule.messages
            }
        })
        /*const isValid = this.rules.every((rule) => {
            const isValid= rule(password).
        })*/

        return isValid ? new ValidPasswordResponse() : new InValidPasswordResponse(["Wrong password"]);
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
