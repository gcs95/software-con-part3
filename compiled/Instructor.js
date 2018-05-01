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
var Instructor = (function (_super) {
    __extends(Instructor, _super);
    function Instructor(firstName, lastName, gender, username, password, instructorID) {
        var _this = _super.call(this, firstName, lastName, gender, username, password) || this;
        _this.instructorID = instructorID;
        return _this;
    }
    Instructor.prototype.getInstructorID = function () {
        return this.instructorID;
    };
    Instructor.prototype.setInstructorID = function (instructorID) {
        if (isAllNumber(instructorID)) {
            this.instructorID = instructorID;
            return true;
        }
        return false;
    };
    return Instructor;
}(Person));
