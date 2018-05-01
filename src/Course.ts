import { Instructor } from './Instructor'
import { Day } from './Day';
import { Time } from './Time';
import { isAllLetter, isAllNumber, isAlphaNumeric } from './Utils';

export class Course {

    private courseID: string;
    private courseName: string;
    private courseInstructor: Instructor;
    private courseCredit: number;
    private courseDays: Day[];
    private courseTime: Time;

    constructor(courseID: string, courseName: string, courseInstructor: Instructor, courseCredit: number, courseDays: Day[], courseTime: Time) {
        this.courseID = courseID;
        this.courseName = courseName;
        this.courseInstructor = courseInstructor;
        this.courseCredit = courseCredit;
        this.courseDays = courseDays;
        this.courseTime = courseTime;
    }

    getCourseID(): string {
        return this.courseID;
    }

    setCourseID(courseID: string): boolean {
        if (isAllNumber(courseID) && courseID.length === 6) {
            this.courseID = courseID;
            return true;
        }
        return false;
    }

    getCourseName(): string {
        return this.courseName;
    }

    setCourseName(courseName: string): boolean {
        if (courseName.length >= 3) {
            this.courseName = courseName;
            return true;
        }
        return false;
    }

    getCourseInstructor(): Instructor {
        return this.courseInstructor;
    }

    setCourseInstructor(courseInstructor: Instructor): void {
        this.courseInstructor = courseInstructor;
    }

    getCourseCredit(): number {
        return this.courseCredit;
    }

    setCourseCredit(courseCredit: number): boolean {
        if (courseCredit > 0 && courseCredit <= 9) {
            this.courseCredit = courseCredit;
            return true;
        } return false;
    }

    getCourseDays(): Day[] {
        return this.courseDays;
    }

    setCourseDays(courseDays: Day[]): void {
        this.courseDays = courseDays;
    }

    getCourseTime(): Time {
        return this.courseTime;
    }

    setCourseTime(courseTime: Time): void {
        this.courseTime = courseTime;
    }

}