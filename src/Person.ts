abstract class Person {

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

    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
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

    setUsername(username: string): void {
        this.username = username;
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