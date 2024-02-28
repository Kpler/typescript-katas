const isPasswordValid = (password: string): boolean => isPasswordLongEnough(password)
    && containsAnUppercase(password)
    && containsALowercase(password)
    && containsANumber(password)
    && containsAnUnderscore(password)

const containsANumber = (password: string) => /\d/.test(password)

const isPasswordLongEnough = (password: string) => password.length >= 8

const containsAnUppercase = (password: string) => /[A-Z]/.test(password)

const containsAnUnderscore = (password: string) => password.indexOf('_') >= 0

const containsALowercase = (password: string) => /[a-z]/.test(password)

export class PasswordValidator {

  public isValid(password: string): boolean {
    return isPasswordValid(password);
  }

}
