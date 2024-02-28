export default (password: string): boolean => {
    return isPasswordLongEnough(password)
        && containsAnUppercase(password)
        && containsALowercase(password)
        && containsANumber(password);
}

function containsANumber(password: string) {
    return /\d/.test(password);
}

function isPasswordLongEnough(password: string) {
    return password.length >= 8;
}

function containsAnUppercase(password: string) {
    return /[A-Z]/.test(password);
}

function containsALowercase(password: string) {
    return /[a-z]/.test(password);
}
