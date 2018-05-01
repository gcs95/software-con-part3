const AdminClass = require('./Admin');
const GenderClass = require('./Gender');

let piyawasin;

// do this before every test
beforeEach(function () {
    nuntachat = new AdminClass.Admin('Nuntachat', 'Pattanasart', GenderClass.Gender.FEMALE, 'pploychat', 'correctpassword');
});

test('Get firstname return correct firstname.', function () {
    expect(nuntachat.getFirstName()).toBe('Nuntachat');
});

test('Set valid firstname passes.', function () {
    expect(nuntachat.setFirstName('Ploychat')).toBe(true);
    expect(nuntachat.getFirstName()).toBe('Ploychat');
});

test('Set invalid firstname fails.', function () {
    expect(nuntachat.setFirstName('Ploychat1997')).toBe(false);
    expect(nuntachat.getFirstName()).toBe('Nuntachat');
    expect(nuntachat.setFirstName('A')).toBe(false);
    expect(nuntachat.getFirstName()).toBe('Nuntachat');
    expect(nuntachat.setFirstName(' ')).toBe(false);
    expect(nuntachat.getFirstName()).toBe('Nuntachat');
    expect(nuntachat.setFirstName('')).toBe(false);
    expect(nuntachat.getFirstName()).toBe('Nuntachat');
});

test('Get lastname return correct lastname.', function () {
    expect(nuntachat.getFirstName()).toBe('Nuntachat');
});

test('Set valid lastname passes.', function () {
    expect(nuntachat.setLastName('Yanofsky')).toBe(true);
    expect(nuntachat.getLastName()).toBe('Yanofsky');
});

test('Set invalid lastname fails.', function () {
    expect(nuntachat.setLastName('Yanofsky79')).toBe(false);
    expect(nuntachat.getLastName()).toBe('Pattanasart');
    expect(nuntachat.setLastName('Z')).toBe(false);
    expect(nuntachat.getLastName()).toBe('Pattanasart');
    expect(nuntachat.setLastName(' ')).toBe(false);
    expect(nuntachat.getLastName()).toBe('Pattanasart');
    expect(nuntachat.setLastName('')).toBe(false);
    expect(nuntachat.getLastName()).toBe('Pattanasart');
});

test('Get fullname correctly.', function () {
    expect(nuntachat.getFullName()).toBe('Nuntachat Pattanasart');
});

test('Get gender correctly.', function () {
    expect(nuntachat.getGender()).toBe(GenderClass.Gender.FEMALE);
});

test('Set gender works correctly.', function () {
    nuntachat.setGender(GenderClass.Gender.MALE);
    expect(nuntachat.getGender()).toBe((GenderClass.Gender.MALE));
    nuntachat.setGender(GenderClass.Gender.FEMALE);
    expect(nuntachat.getGender()).toBe((GenderClass.Gender.FEMALE));
});

test('Get username returns correct username.'), function () {
    expect(nuntachat.getUsername()).toBe('pploychat');
};

test('Set valid username passes.'), function () {
    expect(nuntachat.setUsername('pploychat007')).toBe(true);
    expect(nuntachat.getUsername()).toBe('pploychat007');
};

test('Set invalid username fails.'), function () {
    // less than 5 characters
    expect(nuntachat.setUsername('ploy')).toBe(false);
    expect(nuntachat.getUsername()).toBe('pploychat');
    // contains special characters
    expect(nuntachat.setUsername('ploy*%')).toBe(false);
    expect(nuntachat.getUsername()).toBe('pploychat');

    expect(nuntachat.setUsername(' ')).toBe(false);
    expect(nuntachat.getUsername()).toBe('pploychat');

    expect(nuntachat.setUsername('')).toBe(false);
    expect(nuntachat.getUsername()).toBe('pploychat');
};

test('passwordCorrect(password) works properly?', function(){
    expect(nuntachat.passwordCorrect('correctpassword')).toBe(true);
    expect(nuntachat.passwordCorrect('wrongpassword')).toBe(false);
});


test('changePassword(currentPassword, newPassword) with correct password works properly?', function(){
    expect(nuntachat.changePassword('correctpassword', 'correctpassword2')).toBe(true);
    expect(nuntachat.passwordCorrect('correctpassword2')).toBe(true);
    // invalid new password - less than 8 characters
    expect(nuntachat.changePassword('correctpassword', '12345')).toBe(false);
    expect(nuntachat.passwordCorrect('12345')).toBe(false);
});

test('changePassword(currentPassword, newPassword) with incorrect password doesn\'t work?', function(){
    expect(nuntachat.changePassword('incorrectpassword', 'correctpassword2')).toBe(false);
    expect(nuntachat.passwordCorrect('correctpassword2')).toBe(false);
});
