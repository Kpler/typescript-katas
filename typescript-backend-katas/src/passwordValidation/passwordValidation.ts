export enum ValidationError {
    NotEnoughCharacters,
    NoUnderscore,
    NoNumber,
    NoLowerCaseLetter,
    NoCapitalLetter
}

class ValidationResult{
    constructor(private readonly errors: ValidationError[], private readonly numberOfAcceptedErrors: number) {}
    getErrors(){
        return this.errors
    }

    isPasswordValid(){
        return this.errors.length <= this.numberOfAcceptedErrors
    }
}

abstract class IPasswordValidator {
    protected numberOfAcceptedErrors = 0;
    
    abstract rules: Array<{predicate: (password: string) => boolean, error: ValidationError}>

    protected containsANumber = {predicate: (password: string) => /\d/.test(password), error: ValidationError.NoNumber}

    protected isPasswordLongEnough = (passwordLength: number) => ({
        predicate: (password: string) => password.length >= passwordLength,
        error: ValidationError.NotEnoughCharacters
    })

    protected containsAnUppercase = {predicate: (password: string) => /[A-Z]/.test(password), error: ValidationError.NoCapitalLetter}

    protected containsAnUnderscore = {predicate: (password: string) => password.indexOf('_') >= 0, error: ValidationError.NoUnderscore}

    protected containsALowercase = {predicate: (password: string) => /[a-z]/.test(password), error: ValidationError.NoLowerCaseLetter}

    validatePassword(password: string): ValidationResult {
        return new ValidationResult(this.rules.filter((rule) => !rule.predicate(password)).map(rule => rule.error), this.numberOfAcceptedErrors)
    }
}

export class PasswordValidator extends IPasswordValidator {
    rules = [
        this.isPasswordLongEnough(8),
        this.containsALowercase,
        this.containsANumber,
        this.containsAnUnderscore,
        this.containsAnUppercase
    ];
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

export class PermisivePasswordValidator extends PasswordValidator {
    numberOfAcceptedErrors = 1;
}

