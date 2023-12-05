export const isLongEnough = (password: string) : boolean => {
    return password.length > 8;
}


export const isPasswordValid = (password: string) : boolean => {
    if (isLongEnough(password)) {
        return false;
    }
    return true;
}
