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

const validationOneRules: Array<{ validationRule: VALIDATION_RULE, errorMsg: string }> = [
    {validationRule: isNotLongEnough(8), errorMsg: 'Password is not long enough'},
    {validationRule: isMissingCapitalLetter, errorMsg: ''},
    {validationRule: isMissingLowerCaseLetter, errorMsg: ''},
    {validationRule: isMissingNumber, errorMsg: ''},
    {validationRule: isMissingUnderscore, errorMsg: ''}
];

const validationTwoRules: Array<{ validationRule: VALIDATION_RULE, errorMsg: string }> = [
    {validationRule: isNotLongEnough(6), errorMsg: ''},
    {validationRule: isMissingCapitalLetter, errorMsg: ''},
    {validationRule: isMissingLowerCaseLetter, errorMsg: ''},
    {validationRule: isMissingNumber, errorMsg: ''},
];

const validationThreeRules: Array<{ validationRule: VALIDATION_RULE, errorMsg: string }> = [
    {validationRule: isNotLongEnough(16), errorMsg: ''},
    {validationRule: isMissingCapitalLetter, errorMsg: ''},
    {validationRule: isMissingLowerCaseLetter, errorMsg: ''},
    {validationRule: isMissingUnderscore, errorMsg: ''}
];

type VALIDATION = 'VALIDATION_1' | 'VALIDATION_2' | 'VALIDATION_3';


const mappedRuleSets = new Map([
    ['VALIDATION_1', validationOneRules],
    ['VALIDATION_2', validationTwoRules],
    ['VALIDATION_3', validationThreeRules],
]);

const ruleToErrorMsg = new Map([
    [isNotLongEnough, 'Password is not long enough and is missing']
]);

interface Response {
}

export class PasswordValidResponse implements Response {
    constructor() {
    }
}

export class PasswordInvalidResponse implements Response {
    constructor(public readonly reasons: Array<string>) {
    }
}

export const isPasswordValid = (password: string, validationType: VALIDATION = 'VALIDATION_1'): Response => {
    const ruleset = mappedRuleSets.get(validationType) ?? [];
    if (ruleset.length === 0) {
        throw new Error(`Validation type ${validationType} is not supported`);
    }
    // return !ruleset.some((rule) => rule(password));
    const reasons = ruleset.map((rule) => {
        if(rule.validationRule(password))
            return '';
        else
            return rule.errorMsg;
    }).filter((str) => str.length > 0);


    return reasons.length > 0 ? new PasswordInvalidResponse(reasons)
        : new PasswordValidResponse();
}

export const isPasswordInvalidResponse: (response: Response) => response is PasswordInvalidResponse = (response: Response): response is PasswordInvalidResponse => {
    return response instanceof PasswordInvalidResponse;
}
