const isNotLongEnough = (password: string) : boolean => {
    return password.length <= 8;
}

const isMissingCapitalLetter = (password: string) : boolean => {
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

export const isPasswordValid = (password: string) : boolean => {
    if (
        isNotLongEnough(password)
        || isMissingCapitalLetter(password)
        || isMissingLowerCaseLetter(password)
        || isMissingNumber(password)
        || isMissingUnderscore(password)
    ) {
        return false;
    }
    return true;
}
