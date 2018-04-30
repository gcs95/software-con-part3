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

}