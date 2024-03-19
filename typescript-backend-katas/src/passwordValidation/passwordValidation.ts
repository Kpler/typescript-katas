const containsANumber = (password: string) => /\d/.test(password)

const isLongEnough = (minLength: number) => (password: string) => password.length >= minLength

const containsAnUppercase = (password: string) => /[A-Z]/.test(password)

const containsAnUnderscore = (password: string) => password.indexOf('_') >= 0

const containsALowercase = (password: string) => /[a-z]/.test(password)

export interface ValidationResult {
    isPasswordValid: boolean;
    isLongEnough?: boolean;
    containsCapitalLetter?: boolean;
    containsLowerCase?: boolean;
    containsANumber?: boolean;
    containsAnUnderScore?: boolean;
}


abstract class AbstractPasswordValidator {
    public rules: ((password: string) => boolean)[]

    constructor(rules: ((password: string) => boolean)[]) {
        this.rules = rules;
    }

    isValid(password: string): boolean {
        return this.rules.every((rule) => rule(password))
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


