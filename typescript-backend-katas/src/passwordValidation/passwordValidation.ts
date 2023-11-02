interface Builder {
    buildValidatorOne(): PasswordValidator;
    buildValidatorTwo(): PasswordValidator;
}

export class BuilderValidator implements Builder{
    public buildValidatorOne(): PasswordValidator {
        return new PasswordValidator(VALIDATORS[0]);
    }

    public buildValidatorTwo(): PasswordValidator {
        return new PasswordValidator(VALIDATORS[1]);
    }
}

export class PasswordValidator {

    private validator: Validator;

    constructor(validator: Validator) {
        this.validator = validator;
    }

    public validate(password: string): boolean {
        if (this.validator == 'Validator1') {
            return this.isAtLeastEightCharactersLong(password) && this.validateCase(password) && this.containsNumber(password) && this.containsUnderscore(password);
        } else {
            return this.isAtLeastSixCharactersLong(password) && this.validateCase(password) && this.containsNumber(password);
        }
    }

    private isAtLeastEightCharactersLong(password: string): boolean {
        return password.length >= 8;
    }

    private isAtLeastSixCharactersLong(password: string): boolean {
        return password.length >= 6;
    }

    private validateCase(password: string): boolean {
        return /(?=.*[a-z])(?=.*[A-Z])/.test(password);
    }

    private containsNumber(password: string): boolean {
        return /[0-9]/.test(password);
    }

    private containsUnderscore(password: string): boolean {
        return /[_]/.test(password);
    }
}

export const VALIDATORS = ['Validator1', 'Validator2', 'Validator3', 'Validator4'] as const
export type Validator = typeof VALIDATORS[number]
