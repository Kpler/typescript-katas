
export const validatePassword = (password: string): boolean => {
    return password.length >= 8 && password.match(/[A-Z]/);
}