const isNotLongEnough = (password: string): boolean => {
    return password.length <= 8;
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

export const isPasswordValid = (password: string, validationType: VALIDATION = 'VALIDATION_1'): boolean => {
    return !rules.some((rule) => rule(password));
}
