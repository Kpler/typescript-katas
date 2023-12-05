const isNotLongEnough = (password: string): boolean => {
    return password.length <= 8;
}

const isNotLongEnoughTwo = (password: string): boolean => {
    return password.length <= 6;
}

const isMissingCapitalLetter = (password: string): boolean => {
    return password === password.toLocaleLowerCase();
}

const isMissingLowerCaseLetter = (password: string): boolean => {
    return password === password.toLocaleUpperCase();
}

const isMissingNumber = (password: string): boolean => {
    return !/[0-9]/.test(password);
}

const isMissingUnderscore = (password: string): boolean => {
    return !/_/.test(password);
}

const rules: Array<(password: string) => boolean> = [
    isNotLongEnough,
    isMissingCapitalLetter,
    isMissingLowerCaseLetter,
    isMissingNumber,
    isMissingUnderscore
]

type VALIDATION = 'VALIDATION_1' | 'VALIDATION_2';

const mappedRulesets = new Map([[ 'VALIDATION_1', rules ], [ 'VALIDATION_2', [isNotLongEnoughTwo] ]]);

export const isPasswordValid = (password: string, validationType: VALIDATION = 'VALIDATION_1'): boolean => {
    const ruleset = mappedRulesets.get(validationType);
    if (!ruleset) {
        throw new Error(`Validation type ${validationType} is not supported`);
    }
    return !ruleset.some((rule) => rule(password));
}
