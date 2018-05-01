var Person = (function () {
    function Person(firstName, lastName, gender, username, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.gender = gender;
    }
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (firstName) {
        if (isAllLetter(firstName) && firstName.length >= 2) {
            this.firstName = firstName;
            return true;
        }
        return false;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (lastName) {
        if (isAllLetter(lastName) && lastName.length >= 2) {
            this.lastName = lastName;
            return true;
        }
        return false;
    };
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getGender = function () {
        return this.gender;
    };
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Person.prototype.getUsername = function () {
        return this.username;
    };
    Person.prototype.setUsername = function (username) {
        if (isAlphaNumeric(username) && username.length >= 5) {
            this.username = username;
            return true;
        }
        return false;
    };
    Person.prototype.passwordCorrect = function (password) {
        return password === this.password;
    };
    Person.prototype.changePassword = function (currentPassword, newPassword) {
        if (currentPassword === this.password) {
            if (newPassword.length >= 8)
                this.password = newPassword;
            return true;
        }
        return false;
    };
    return Person;
}());
