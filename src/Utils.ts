/* Check if the string contains only digits. */
function isAllNumber(s: string): boolean {
    return new RegExp("^\\d+$").test(s);
}

/* Check if the string contains only A-z. */
function isAllLetter(s: string): boolean {
    return new RegExp("^[a-zA-Z]+$").test(s);
}

/* Check if the string contains only A-z and digits. */
function isAlphaNumeral(s: string): boolean {
    return new RegExp("^[a-zA-Z0-9_.-]*$").test(s);
}
