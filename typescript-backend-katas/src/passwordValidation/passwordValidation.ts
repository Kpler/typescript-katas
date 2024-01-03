const isNotLongEnough = (password: string): boolean => {
    return password.length <= 8;
}

const isNotLongEnoughTwo = (password: string): boolean => {
    return password.length <= 6;
}

const isNotLongEnoughThree = (password: string): boolean => {
    return password.length <= 16;
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

type VALIDATION_RULE = (password: string) => boolean;

const validationOneRules: Array<VALIDATION_RULE> = [
    isNotLongEnough,
    isMissingCapitalLetter,
    isMissingLowerCaseLetter,
    isMissingNumber,
    isMissingUnderscore
]

const validationTwoRules: Array<VALIDATION_RULE> = [
    isNotLongEnoughTwo,
    isMissingCapitalLetter,
    isMissingLowerCaseLetter,
    isMissingNumber
]

const validationThreeRules: Array<VALIDATION_RULE> = [isNotLongEnoughThree]

type VALIDATION = 'VALIDATION_1' | 'VALIDATION_2' | 'VALIDATION_3';


const mappedRulesets = new Map([
    ['VALIDATION_1', validationOneRules],
    ['VALIDATION_2', validationTwoRules],
    ['VALIDATION_3', validationThreeRules],
]);

export const isPasswordValid = (password: string, validationType: VALIDATION = 'VALIDATION_1'): boolean => {
    const ruleset = mappedRulesets.get(validationType) ?? [];
    if (ruleset.length === 0) {
        throw new Error(`Validation type ${validationType} is not supported`);
    }
    return !ruleset.some((rule) => rule(password));
}
