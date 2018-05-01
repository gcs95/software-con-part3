function isAllNumber(s) {
    return new RegExp("^\\d+$").test(s);
}
function isAllLetter(s) {
    return new RegExp("^[a-zA-Z]+$").test(s);
}
function isAlphaNumeric(s) {
    return new RegExp("^[a-zA-Z0-9_.-]*$").test(s);
}
