"use strict";
exports.__esModule = true;
var Utils_1 = require("./Utils");
var Course = (function () {
    function Course(courseID, courseName, courseInstructor, courseCredit, courseDays, courseTime) {
        this.courseID = courseID;
        this.courseName = courseName;
        this.courseInstructor = courseInstructor;
        this.courseCredit = courseCredit;
        this.courseDays = courseDays;
        this.courseTime = courseTime;
    }
    Course.prototype.getCourseID = function () {
        return this.courseID;
    };
    Course.prototype.setCourseID = function (courseID) {
        if (Utils_1.isAllNumber(courseID) && courseID.length === 6) {
            this.courseID = courseID;
            return true;
        }
        return false;
    };
    Course.prototype.getCourseName = function () {
        return this.courseName;
    };
    Course.prototype.setCourseName = function (courseName) {
        if (courseName.length >= 3) {
            this.courseName = this.courseName;
            return true;
        }
        return false;
    };
    Course.prototype.getCourseInstructor = function () {
        return this.courseInstructor;
    };
    Course.prototype.setCourseInstructor = function (courseInstructor) {
        this.courseInstructor = courseInstructor;
    };
    Course.prototype.getCourseCredit = function () {
        return this.courseCredit;
    };
    Course.prototype.setCourseCredit = function (courseCredit) {
        if (courseCredit > 0 && courseCredit <= 9) {
            this.courseCredit = courseCredit;
            return true;
        }
        return false;
    };
    Course.prototype.getCourseDays = function () {
        return this.courseDays;
    };
    Course.prototype.setCourseDays = function (courseDays) {
        this.courseDays = courseDays;
    };
    Course.prototype.getCourseTime = function () {
        return this.courseTime;
    };
    Course.prototype.setCourseTime = function (courseTime) {
        this.courseTime = courseTime;
    };
    return Course;
}());
exports.Course = Course;
