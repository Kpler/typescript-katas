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

export class RuleValidResponse {
    readonly isValid = true;
    readonly msg = "Is Valid"
}

export class RuleInValidResponse {
    readonly isValid = false;
    msg: string = ""
}

abstract class IPasswordValidator {
    abstract rules: ((password: string) => ValidPasswordResponse | RuleInValidResponse)[]
    public invalidPw = new RuleInValidResponse([])
    
    protected containsANumber = (password: string): ValidPasswordResponse | RuleInValidResponse => {
        const containsNumber = /\d/.test(password)
        if (containsNumber) {
            return new ValidPasswordResponse()    
        }
        this.invalidPw.msg("Does not contain a Number")
        return this.invalidPw
    }

    protected isPasswordLongEnough = (passwordLength: number) => (password: string) => password.length >= passwordLength;

    protected containsAnUppercase = (password: string): ValidPasswordResponse | RuleInValidResponse => {
        const containsNumber = /[A-Z]/.test(password)
        if (containsNumber) {
            return new ValidPasswordResponse()
        }
        this.invalidPw.addMessage("Does not contain an upper case")
        return this.invalidPw
    }
    protected containsAnUnderscore = (password: string): ValidPasswordResponse | RuleInValidResponse => {
        const containsNumber = password.indexOf('_') >= 0
        if (containsNumber) {
            return new ValidPasswordResponse()
        }
        this.invalidPw.addMessage("Does not contain an under case")
        return this.invalidPw
    }
    protected containsALowercase = (password: string): ValidPasswordResponse | RuleInValidResponse => {
            const containsNumber = /[a-z]/.test(password)
            if (containsNumber) {
                return new ValidPasswordResponse()
            }
            this.invalidPw.addMessage("Does not contain an under case")
            return this.invalidPw
        }
    protected validatePassword(password: string): ValidPasswordResponse | RuleInValidResponse  {
        const invalidResponses: string[] = []
        this.rules.forEach(rule => {
            const appliedRule = rule(password);
            if (appliedRule instanceof InValidPasswordResponse) {
                invalidResponses.push(appliedRule.messages[0]) // only one message per rule
            }
        })
        return !invalidResponses.length ? new ValidPasswordResponse() : new InValidPasswordResponse(invalidResponses);
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
