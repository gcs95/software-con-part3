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
  
		getCourseID(): string {
        return this.courseID;
    }

    setCourseID(courseID: string): void {
            this.courseID = courseID;
    }

    getCourseName(): string {
        return this.courseName;
    }

    setCourseName(courseName: string): boolean {
        this.courseName = this.courseName;
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

    setCourseCredit(courseCredit: number): void {
        this.courseCredit = courseCredit;
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