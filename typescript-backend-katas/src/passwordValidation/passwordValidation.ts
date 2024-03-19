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

export class RuleResponse {
    readonly isValid;
    readonly msg : string | undefined;

    constructor(isValid: boolean, msg: string | undefined) {
        this.msg = msg
        this.isValid = isValid
    }
}

abstract class IPasswordValidator {
    abstract rules: ((password: string) => RuleResponse)[]
    public ruleResponse = new RuleResponse(true, undefined)
    
    protected containsANumber = (password: string): RuleResponse => {
        const containsNumber = /\d/.test(password)
        if (containsNumber) {
            return this.ruleResponse
        }
        return new RuleResponse(false, "Does not contain a Number")
    }

    protected isPasswordLongEnough = (passwordLength: number) => (password: string) => password.length >= passwordLength;

    protected containsAnUppercase = (password: string): RuleResponse => {
        const containsNumber = /[A-Z]/.test(password)
        if (containsNumber) {
            return this.ruleResponse
        }
        return new RuleResponse(false, "Does not contain an upper case")
    }
    protected containsAnUnderscore = (password: string): ValidPasswordResponse | RuleResponse => {
        const containsNumber = password.indexOf('_') >= 0
        if (containsNumber) {
            return this.ruleResponse
        }
        return new RuleResponse(false, "Does not contain an under case")
    }
    protected containsALowercase = (password: string): ValidPasswordResponse | RuleResponse => {
            const containsNumber = /[a-z]/.test(password)
            if (containsNumber) {
                return this.ruleResponse
            }
            return new RuleResponse(false, "Does not contain an under case")
        }
    protected validatePassword(password: string): ValidPasswordResponse | RuleResponse  {
        const invalidResponses: string[] = []
        this.rules.forEach(rule => {
            const appliedRule = rule(password);
            if (appliedRule instanceof InValidPasswordResponse) {
                invalidResponses.push(appliedRule.msg) // only one message per rule
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
