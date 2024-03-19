export enum ValidationError {
    NotEnoughCharacters
}

abstract class IPasswordValidator {
    abstract rules: [ValidationError, ((password: string) => boolean)][]
    
    protected containsANumber = (password: string) => /\d/.test(password)

    protected isPasswordLongEnough = (passwordLength: number) => (password: string) => password.length >= passwordLength;

    protected containsAnUppercase = (password: string) => /[A-Z]/.test(password)

    protected containsAnUnderscore = (password: string) => password.indexOf('_') >= 0

    protected containsALowercase = (password: string) => /[a-z]/.test(password)

    validatePassword(password: string): {result : boolean, message : string} {
        const invalidRules = this.rules.map((rule) => rule(password)).filter(rules => rules !== null)
        return  {result: isValid, message: isValid ? "Password Valid": "Wrong password"}
    }
}

export class PasswordValidator extends IPasswordValidator {
    rules = [
        [ValidationError.NotEnoughCharacters, this.isPasswordLongEnough(8)],
        /* this.containsALowercase,
        this.containsANumber,
        this.containsAnUnderscore,
        this.containsAnUppercase */
    ]
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