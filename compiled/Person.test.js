const PersonClass = require('./Person');
const GenderClass = require('./Gender');

let piyawasin;

// do this before every test
beforeEach(function () {
    piyawasin = new PersonClass.Person('Piyawasin', 'Pikrorngarn', GenderClass.Gender.MALE, 'ppikrorngarn', 'correctpassword');
});

test('Get firstname return correct firstname.', function () {
    expect(piyawasin.getFirstName()).toBe('Piyawasin');
});

test('Set valid firstname passes.', function () {
    expect(piyawasin.setFirstName('Pierre')).toBe(true);
    expect(piyawasin.getFirstName()).toBe('Pierre');
});

test('Set invalid firstname fails.', function () {
    expect(piyawasin.setFirstName('Pierre90')).toBe(false);
    expect(piyawasin.getFirstName()).toBe('Piyawasin');
    expect(piyawasin.setFirstName('A')).toBe(false);
    expect(piyawasin.getFirstName()).toBe('Piyawasin');
    expect(piyawasin.setFirstName(' ')).toBe(false);
    expect(piyawasin.getFirstName()).toBe('Piyawasin');
    expect(piyawasin.setFirstName('')).toBe(false);
    expect(piyawasin.getFirstName()).toBe('Piyawasin');
});

test('Get lastname return correct lastname.', function () {
    expect(piyawasin.getFirstName()).toBe('Piyawasin');
});

test('Set valid lastname passes.', function () {
    expect(piyawasin.setLastName('Yanofsky')).toBe(true);
    expect(piyawasin.getLastName()).toBe('Yanofsky');
});

test('Set invalid lastname fails.', function () {
    expect(piyawasin.setLastName('Yanofsky79')).toBe(false);
    expect(piyawasin.getLastName()).toBe('Pikrorngarn');
    expect(piyawasin.setLastName('Z')).toBe(false);
    expect(piyawasin.getLastName()).toBe('Pikrorngarn');
    expect(piyawasin.setLastName(' ')).toBe(false);
    expect(piyawasin.getLastName()).toBe('Pikrorngarn');
    expect(piyawasin.setLastName('')).toBe(false);
    expect(piyawasin.getLastName()).toBe('Pikrorngarn');
});

test('Get fullname correctly.', function () {
    expect(piyawasin.getFullName()).toBe('Piyawasin Pikrorngarn');
});

test('Get gender correctly.', function () {
    expect(piyawasin.getGender()).toBe(GenderClass.Gender.MALE);
});

test('Set gender works correctly.', function () {
    piyawasin.setGender(GenderClass.Gender.FEMALE);
    expect(piyawasin.getGender()).toBe(GenderClass.Gender.FEMALE);
    piyawasin.setGender(GenderClass.Gender.MALE);
    expect(piyawasin.getGender()).toBe(GenderClass.Gender.MALE);
});

test('Get username returns correct username.'), function () {
    expect(piyawasin.getUsername()).toBe('ppikrorngarn');
};

test('Set valid username passes.'), function () {
    expect(piyawasin.setUsername('piyawasin007')).toBe(true);
    expect(piyawasin.getUsername()).toBe('piyawasin007');
};

test('Set invalid username fails.'), function () {
    // less than 5 characters
    expect(piyawasin.setUsername('piya')).toBe(false);
    expect(piyawasin.getUsername()).toBe('ppikrorngarn');
    // contains special characters
    expect(piyawasin.setUsername('piya*%')).toBe(false);
    expect(piyawasin.getUsername()).toBe('ppikrorngarn');

    expect(piyawasin.setUsername(' ')).toBe(false);
    expect(piyawasin.getUsername()).toBe('ppikrorngarn');

    expect(piyawasin.setUsername('')).toBe(false);
    expect(piyawasin.getUsername()).toBe('ppikrorngarn');
};

test('passwordCorrect(password) works properly?', function(){
    expect(piyawasin.passwordCorrect('correctpassword')).toBe(true);
    expect(piyawasin.passwordCorrect('wrongpassword')).toBe(false);
});

test('changePassword(currentPassword, newPassword) with correct password works properly?', function(){
    expect(piyawasin.changePassword('correctpassword', 'correctpassword2')).toBe(true);
    expect(piyawasin.passwordCorrect('correctpassword2')).toBe(true);
    // invalid new password - less than 8 characters
    expect(piyawasin.changePassword('correctpassword', '12345')).toBe(false);
    expect(piyawasin.passwordCorrect('12345')).toBe(false);
});

test('changePassword(currentPassword, newPassword) with incorrect password doesn\'t work?', function(){
    expect(piyawasin.changePassword('incorrectpassword', 'correctpassword2')).toBe(false);
    expect(piyawasin.passwordCorrect('correctpassword2')).toBe(false);
});