export const isNotLongEnough = (password: string) : boolean => {
    return password.length <= 8;
}

export const isMissingCapitalLetter = (password: string) : boolean => {
    
}


export const isPasswordValid = (password: string) : boolean => {
    if (isNotLongEnough(password)) {
        return false;
    }
    return true;
}
