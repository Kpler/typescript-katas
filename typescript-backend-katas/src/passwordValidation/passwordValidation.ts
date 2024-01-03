const isNotLongEnough = (minLen: number): VALIDATION_RULE => {
    return (password: string): boolean => {
        return password.length <= minLen;
    }
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
    isNotLongEnough(8),
    isMissingCapitalLetter,
    isMissingLowerCaseLetter,
    isMissingNumber,
    isMissingUnderscore
]

const validationTwoRules: Array<VALIDATION_RULE> = [
    isNotLongEnough(6),
    isMissingCapitalLetter,
    isMissingLowerCaseLetter,
    isMissingNumber
]

const validationThreeRules: Array<VALIDATION_RULE> = [
    isNotLongEnough(16),
    isMissingCapitalLetter,
    isMissingLowerCaseLetter,
    isMissingUnderscore
];

type VALIDATION = 'VALIDATION_1' | 'VALIDATION_2' | 'VALIDATION_3';


const mappedRuleSets = new Map([
    ['VALIDATION_1', validationOneRules],
    ['VALIDATION_2', validationTwoRules],
    ['VALIDATION_3', validationThreeRules],
]);

export const isPasswordValid = (password: string, validationType: VALIDATION = 'VALIDATION_1'): boolean => {
    const ruleset = mappedRuleSets.get(validationType) ?? [];
    if (ruleset.length === 0) {
        throw new Error(`Validation type ${validationType} is not supported`);
    }
    return !ruleset.some((rule) => rule(password));
}
