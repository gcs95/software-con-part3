"use strict";
exports.__esModule = true;
function isAllNumber(s) {
    return new RegExp("^\\d+$").test(s);
}
exports.isAllNumber = isAllNumber;
function isAllLetter(s) {
    return new RegExp("^[a-zA-Z]+$").test(s);
}
exports.isAllLetter = isAllLetter;
function isAlphaNumeric(s) {
    return new RegExp("^[a-zA-Z0-9_.-]*$").test(s);
}
exports.isAlphaNumeric = isAlphaNumeric;
