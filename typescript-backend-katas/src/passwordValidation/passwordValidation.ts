const isNotLongEnough = (password: string) : boolean => {
    return password.length <= 8;
}

const isMissingCapitalLetter = (password: string) : boolean => {
    console.log(password);
    return password === password.toLocaleLowerCase();
}

const isMissingLowerCaseLetter = (password: string) : boolean => {
    return password === password.toLocaleUpperCase();
}

const isMissingNumber = (password: string) : boolean => {
    return !/[0-9]/.test(password);
}

const isMissingUnderscore = (password: string): boolean => {
    return !/_/.test(password);
}

const rules = [isNotLongEnough, isMissingCapitalLetter, isMissingLowerCaseLetter, isMissingNumber, isMissingUnderscore]

export const isPasswordValid = (password: string) : boolean => {
    if ( rules.some((rule) => rule(password))) {
        return false;
    }
    return true;
}
