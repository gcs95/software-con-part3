import { Person } from './Person';
import { Gender } from './Gender';
import { isAllLetter, isAllNumber, isAlphaNumeric } from './Utils';

export class Student extends Person {

    private studentID: string;

    constructor(firstName: string, lastName: string, gender: Gender, username: string, password: string, studentID: string) {
        super(firstName, lastName, gender, username, password);
        this.studentID = studentID;
    }

    getStudentID(): string {
        return this.studentID;
    }

    setStudentID(studentID: string): boolean {
        if (isAllNumber(studentID) && studentID.length === 9) {
            this.studentID = studentID;
            return true;
        }
        return false;
    }

}