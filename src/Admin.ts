import { Person } from './Person'
import { Gender } from './Gender';
import { isAllLetter, isAllNumber, isAlphaNumeric } from './Utils';

export class Admin extends Person {

    constructor(firstName: string, lastName: string, gender: Gender, username: string, password: string) {
        super(firstName, lastName, gender, username, password)
    }

}