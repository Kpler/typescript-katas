export function isPasswordValid(password: string): boolean {
    const upperCaseCheck = new RegExp('[A-Z].*');
    const lowerCaseCheck = new RegExp('[a-z].*');
    const numberCheck = new RegExp('[0-9].*')
    const underscoreCheck = new RegExp('_.*')

    return password.length > 8 && upperCaseCheck.test(password) && lowerCaseCheck.test(password) && numberCheck.test(password) && underscoreCheck.test(password)
}

function hasUpperCase (pw: string): boolean {
    const upperCaseCheck = new RegExp('[A-Z].*');
    return upperCaseCheck.test(pw)
}

export class PasswordValidationIteration{
    passwordLength = 8
    mustContain = [
        hasUpperCase
    ]

    isPasswordValid(password: string): boolean {
        return password.length > this.passwordLength && this.mustContain.every((fn) => fn(password))
    }
}