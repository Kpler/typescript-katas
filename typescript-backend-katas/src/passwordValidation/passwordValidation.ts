
export const isPasswordValid = (password: string): boolean => {
    return password.length >= 8 && /[A-Z]/.test(password);
}
