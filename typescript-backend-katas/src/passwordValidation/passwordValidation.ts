const containsANumber = (password: string): ValidationResult => {
    const result = /\d/.test(password)
    return <ValidationResult>{
        isPasswordValid: result,
        containsANumber: result,
    }
}

const isLongEnough = (minLength: number) => (password: string): ValidationResult  => {
    const result = password.length >= minLength
    return <ValidationResult>{
        isPasswordValid: result,
        isLongEnough: result,
    }
}

const containsAnUppercase = (password: string) : ValidationResult =>  {
    const result = /[A-Z]/.test(password)
    return <ValidationResult>{
        isPasswordValid: result,
        containsCapitalLetter: result,
    }}

const containsAnUnderscore = (password: string): ValidationResult  => {
    const result = password.indexOf('_') >= 0
    return <ValidationResult>{
        isPasswordValid: result,
        containsAnUnderScore: result,
    }
}

const containsALowercase = (password: string): ValidationResult  => {
    const result = /[a-z]/.test(password)
    return <ValidationResult>{
        isPasswordValid: result,
        containsLowerCase: result,
    }
}

export interface ValidationResult {
    isPasswordValid: boolean;
    isLongEnough?: boolean;
    containsCapitalLetter?: boolean;
    containsLowerCase?: boolean;
    containsANumber?: boolean;
    containsAnUnderScore?: boolean;
}


abstract class AbstractPasswordValidator {
    public rules: ((password: string) =>ValidationResult)[]

    constructor(rules: ((password: string) => ValidationResult)[]) {
        this.rules = rules;
    }

    isValid(password: string): ValidationResult {
        let result: ValidationResult = {
            isPasswordValid: true
        }

        this.rules.forEach(
            (rule) => {
                const ruleIsValid = rule(password)
                if (!ruleIsValid.isPasswordValid) {
                    result = {
                        ...result,
                        ...ruleIsValid
                    }
                }
            }
        )

        return result
    }
}

export class PasswordValidator extends AbstractPasswordValidator {
    constructor() {
        const rules = [
            isLongEnough(8),
            containsALowercase,
            containsANumber,
            containsAnUnderscore,
            containsAnUppercase
        ]
        super(rules);
    }
}

export class BasicPasswordValidator extends AbstractPasswordValidator {
    constructor() {
        const rules = [
            isLongEnough(7),
            containsAnUppercase,
            containsALowercase,
            containsANumber,
        ]
        super(rules);
    }
}

export class AdvancedPasswordValidator extends AbstractPasswordValidator {
    constructor() {
        const rules = [
            isLongEnough(16),
            containsAnUppercase,
            containsALowercase,
            containsAnUnderscore,
        ]
        super(rules);
    }
}


