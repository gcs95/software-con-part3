const GenderEnum = require('./Gender');

test('Gender enum values correct?', function(){
    expect(GenderEnum.Gender.MALE).toBe('Male');
    expect(GenderEnum.Gender.FEMALE).toBe('Female');
});