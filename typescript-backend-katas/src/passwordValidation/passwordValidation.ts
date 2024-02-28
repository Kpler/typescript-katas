const isPasswordValid = (password: string): boolean => isPasswordLongEnough(password)
    && containsAnUppercase(password)
    && containsALowercase(password)
    && containsANumber(password)
    && containsAnUnderscore(password)

const containsANumber = (password: string) => /\d/.test(password)

const isPasswordLongEnough = (password: string) => password.length >= 8

const containsAnUppercase = (password: string) => /[A-Z]/.test(password)

const containsAnUnderscore = (password: string) => password.indexOf('_') >= 0

const containsALowercase = (password: string) => /[a-z]/.test(password)

abstract class IPasswordValidator {
    public rules: ((password: string) => boolean)[]

    constructor(rules: ((password: string) => boolean)[]) {
        this.rules = rules;
    }

    isValid(password: string): boolean {
        return this.rules.every((rule) => rule(password))
    }
}

export class PasswordValidator extends IPasswordValidator {
    constructor() {
        const rules = [
            isPasswordLongEnough,
            containsALowercase,
            containsANumber,
            containsAnUnderscore,
            containsAnUppercase
        ]
        super(rules);
    }
}

export class PasswordValidatorTwo extends IPasswordValidator {
    constructor() {
        const rules = [
            (password: string) => password.length >= 6,
        ]
        super(rules);
    }
}
