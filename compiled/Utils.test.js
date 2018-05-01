const UtilsClass = require('./Utils');

test('isAllNumber(s) works correctly?', function(){
    expect(UtilsClass.isAllNumber('12345')).toBe(true);
    expect(UtilsClass.isAllNumber('12 45')).toBe(false);
    expect(UtilsClass.isAllNumber('1234a')).toBe(false);
    expect(UtilsClass.isAllNumber('asdfg')).toBe(false);
    expect(UtilsClass.isAllNumber(' ')).toBe(false);
    expect(UtilsClass.isAllNumber('')).toBe(false);
});

test('isAllLetter(s) works correctly?', function(){
    expect(UtilsClass.isAllLetter('asdfg')).toBe(true);
    expect(UtilsClass.isAllLetter('asdf7')).toBe(false);
    expect(UtilsClass.isAllLetter('12345')).toBe(false);
    expect(UtilsClass.isAllLetter('asd f')).toBe(false);
    expect(UtilsClass.isAllLetter(' ')).toBe(false);
    expect(UtilsClass.isAllLetter('')).toBe(false);
});

test('isAlphaNumeric(s) works correctly?', function(){
    expect(UtilsClass.isAllLetter('asdfg')).toBe(true);
    expect(UtilsClass.isAllLetter('12345')).toBe(false);
    expect(UtilsClass.isAllLetter('abc23')).toBe(false);
    expect(UtilsClass.isAllLetter('123 5')).toBe(false);
    expect(UtilsClass.isAllLetter('asd f')).toBe(false);
    expect(UtilsClass.isAllLetter(' ')).toBe(false);
    expect(UtilsClass.isAllLetter('')).toBe(false);
});