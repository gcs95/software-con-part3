const InstructorFile = require('./Instructor');
const DayFile = require('./Day');
const TimeFile = require('./Time');
const UltilsFile = require('./Utils');
const CourseFile = require('./Course');
const GenderFile = require('./Gender');

let myla;
let oop;

beforeEach(function () {
    myla = new InstructorFile.Instructor('Gaanploo', 'Somboon', GenderFile.Gender.FEMALE, 'gaanploo', '12345', '12345');
    oop = new CourseFile.Course('123456', 'oop', myla, 3, [DayFile.Day.MON, DayFile.Day.THU], TimeFile.Time._0800_1000);
});

test('test get course ID', function () {
    expect(oop.getCourseID()).toBe('123456');
});

test('set course ID with valid input', function () {
    expect(oop.setCourseID('555555')).toBe(true);
    expect(oop.getCourseID()).toBe('555555');
});

test('set course ID with invalid input', function () {
    expect(oop.setCourseID('1234567')).toBe(false);
    expect(oop.getCourseID()).toBe('123456');
    expect(oop.setCourseID('5555asd')).toBe(false);
    expect(oop.getCourseID()).toBe('123456');
});

test('get course name', function () {
    expect(oop.getCourseName()).toBe('oop');
});

test('set course name with valid input', function () {
    expect(oop.setCourseName('calculus')).toBe(true);
    expect(oop.getCourseName()).toBe('calculus');
});

test('set course name with invalid input', function () {
    expect(oop.setCourseName('op')).toBe(false);
    expect(oop.getCourseName()).toBe('oop');
});

test('get course instructor', function () {
    expect(oop.getCourseInstructor()).toEqual(
        {
            firstName: 'Gaanploo', lastName: 'Somboon', gender: GenderFile.Gender.FEMALE, username: 'gaanploo', password: '12345', instructorID: '12345'
        }
    );
});

test('set instructor', function () {
    var newInstructor = new InstructorFile.Instructor('Ploy', 'Chat', GenderFile.Gender.FEMALE, 'ploychat', '12345', '54321');
    expect(oop.setCourseInstructor(newInstructor));
    expect(oop.getCourseInstructor()).toEqual(
        {
            firstName: 'Ploy', lastName: 'Chat', gender: GenderFile.Gender.FEMALE, username: 'ploychat', password: '12345', instructorID: '54321'
        }
    );
});

test('test get course credit', function() {
    expect(oop.getCourseCredit()).toBe(3);
});

test('set course credit with valid input', function(){
    expect(oop.setCourseCredit(2)).toBe(true);
    expect(oop.getCourseCredit()).toBe(2);
});

test('set course credit with invalid input', function(){
    expect(oop.setCourseCredit(12)).toBe(false);
    expect(oop.getCourseCredit()).toBe(3);
});

test('test get course day', function() {
    expect(oop.getCourseDays()).toEqual([DayFile.Day.MON, DayFile.Day.THU]);
});

test('test set course day' , function() {
    expect(oop.setCourseDays([DayFile.Day.TUE, DayFile.Day.FRI]));
    expect(oop.getCourseDays()).toEqual([DayFile.Day.TUE, DayFile.Day.FRI]);
});

test('test get course time', function() {
    expect(oop.getCourseTime()).toBe(TimeFile.Time._0800_1000);
});

test('test set course time', function(){
    expect(oop.setCourseTime(TimeFile.Time._1000_1200));
    expect(oop.getCourseTime()).toBe(TimeFile.Time._1000_1200)
});
