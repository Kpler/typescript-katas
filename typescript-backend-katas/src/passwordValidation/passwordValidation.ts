export function isPasswordValid(password: string) {
    return password.length > 8 && password.match(`[A-Z].*`);
}