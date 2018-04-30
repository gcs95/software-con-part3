class Course {

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
  
}