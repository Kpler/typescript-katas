export enum ValidationError {
    NotEnoughCharacters
}

abstract class IPasswordValidator {
    abstract rules: Array<{predicate: (password: string) => boolean, error: ValidationError}>

    protected containsANumber = (password: string) => /\d/.test(password)

    protected isPasswordLongEnough = (passwordLength: number) => ({
        predicate: (password: string) => password.length >= passwordLength,
        error: ValidationError.NotEnoughCharacters
    })

    protected containsAnUppercase = (password: string) => /[A-Z]/.test(password)

    protected containsAnUnderscore = (password: string) => password.indexOf('_') >= 0

    protected containsALowercase = (password: string) => /[a-z]/.test(password)

    validatePassword(password: string): ValidationError[] {
        return this.rules.filter((rule) => rule.predicate(password)).map(rule => rule.error)
        // return  {result: isValid, message: isValid ? "Password Valid": "Wrong password"}
    }
}

export class PasswordValidator extends IPasswordValidator {
    rules = [
        this.isPasswordLongEnough(8)
        /* this.containsALowercase,
        this.containsANumber,
        this.containsAnUnderscore,
        this.containsAnUppercase */
    ];
}
/*
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
 */
