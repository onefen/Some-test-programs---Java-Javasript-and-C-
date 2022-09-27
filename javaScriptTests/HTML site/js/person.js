'use strict';

$(document).ready(function() {
    //Some exercises with Objects and prototypes in JavaScript

    function person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    person.prototype.fullName = function() {
        return this.firstName + " " + this.lastName;
    }

    let Pesho = new person('Petur', 'Stoianov', 34);
    let peshoFullName = Pesho.fullName;


    //The result is not right
    $('#person').append('<span>' + peshoFullName + '</span>');
});