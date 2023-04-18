function randomPickCharacter(charArray: string): string {
    return charArray.charAt(Math.floor(Math.random() * charArray.length));
}

export function randomID(prefix: string, length=16) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return prefix + Array.from({ length }, () => randomPickCharacter(characters)).join('');
}
