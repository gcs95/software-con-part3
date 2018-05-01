import { Person } from "./Person";
import { Gender } from './Gender';
import { isAllLetter, isAllNumber, isAlphaNumeric } from './Utils';

export class Instructor extends Person {
    
    private instructorID: string;

    constructor(firstName: string, lastName: string, gender: Gender, username: string, password: string, instructorID: string) {
        super(firstName, lastName, gender, username, password);
        this.instructorID = instructorID;
    }

    getInstructorID(): string {
        return this.instructorID;
    }

    setInstructorID(instructorID: string): boolean {
        if(isAllNumber(instructorID)){
            this.instructorID = instructorID;
            return true;
        }
        return false;
    }
    
}