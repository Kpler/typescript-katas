export const isPasswordValid = (password: string) : boolean => {
    if (password.length < 8)
        return false;
    return true;
}
