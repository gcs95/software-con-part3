class Student extends Person {

    private studentID: string;

    constructor(firstName: string, lastName: string, gender: Gender, username: string, password: string, studentID: string) {
        super(firstName, lastName, gender, username, password);
        this.studentID = studentID;
    }

    getStudentID(): string {
        return this.studentID;
    }

    setStudentID(studentID: string): void {
        this.studentID = studentID;
    }

}