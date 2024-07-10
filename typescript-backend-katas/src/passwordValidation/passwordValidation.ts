export function isPasswordValid(password: string): boolean {
    const upperCaseCheck = new RegExp('[A-Z].*');
    const lowerCaseCheck = new RegExp('[a-z].*');

    return password.length > 8 && upperCaseCheck.test(password) && lowerCaseCheck.test(password)
}