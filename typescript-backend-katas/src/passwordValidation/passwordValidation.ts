const isNotLongEnough = (password: string) : boolean => {
    return password.length <= 8;
}

const isMissingCapitalLetter = (password: string) : boolean => {
    return password === password.toLocaleLowerCase();
}

const isMissingLowerCaseLetter = (password: string) : boolean => {
    return password === password.toLocaleUpperCase();
}

export const isPasswordValid = (password: string) : boolean => {
    if (isNotLongEnough(password) || isMissingCapitalLetter(password) || isMissingLowerCaseLetter(password)) {
        return false;
    }
    return true;
}
