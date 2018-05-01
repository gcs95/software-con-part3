"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person_1 = require("./Person");
var Utils_1 = require("./Utils");
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, gender, username, password, studentID) {
        var _this = _super.call(this, firstName, lastName, gender, username, password) || this;
        _this.studentID = studentID;
        return _this;
    }
    Student.prototype.getStudentID = function () {
        return this.studentID;
    };
    Student.prototype.setStudentID = function (studentID) {
        if (Utils_1.isAllNumber(studentID) && studentID.length === 9) {
            this.studentID = studentID;
            return true;
        }
        return false;
    };
    return Student;
}(Person_1.Person));
exports.Student = Student;
