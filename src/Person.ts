import { Gender } from './Gender';
import { isAllLetter, isAllNumber, isAlphaNumeric } from './Utils';

export abstract class Person {

    private firstName: string;
    private lastName: string;
    private gender: Gender;
    private username: string;
    private password: string;

    constructor(firstName: string, lastName: string, gender: Gender, username: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.gender = gender;
    }

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(firstName: string): boolean {
        if (isAllLetter(firstName) && firstName.length >=  2) {
            this.firstName = firstName;
            return true;
        }
        return false;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string): boolean {
        if (isAllLetter(lastName) && lastName.length >= 2){
            this.lastName = lastName; 
            return true;
        }
        return false;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }

    getGender(): Gender {
        return this.gender;
    }

    setGender(gender: Gender): void {
        this.gender = gender;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(username: string): boolean {
        if(isAlphaNumeric(username) && username.length >= 5){
            this.username = username;
            return true;
        }
       return false;
    }

    passwordCorrect(password: string): boolean {
        return password === this.password;
    }

    changePassword(currentPassword: string, newPassword: string): boolean {
        if (currentPassword === this.password) {
            if(newPassword.length >= 8)
            this.password = newPassword;
            return true;
        }
        return false;
    }

}