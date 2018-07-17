
/**
 * https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
 *
 * @param {string} firstAndLast
 * @returns {string} either a first, last or full name
 */
var Person = function(firstAndLast) {
  let name = firstAndLast
  
  this.getFullName = () => name;
  
  this.getFirstName = () => name.slice(0, name.indexOf(" "));

  this.getLastName = () => name.slice(name.indexOf(" ") + 1);
  
  this.setFirstName = (first) => name = first + " " + this.getLastName()
  
  this.setLastName = (last) => name = this.getFirstName() + " " + last

  this.setFullName = (firstAndLast) => name = firstAndLast
};

var bob = new Person('Bob Ross');
bob.getFullName();

/**
 * Ben's version
 * 
 * Note: This will fail tests.  I think they wanted you to write this 
 * the way you did just to get your feet wet the more I look at it.
 * Additionally, this is how the new `class` keyword works.
 * 
 * REQUIRED READING: https://eloquentjavascript.net/04_data.html
 * https://eloquentjavascript.net/06_object.html
 * THESE ARE DENSE AND WILL TAKE A WHILE. DO THE HOMEWORK NEXT
 * 
 * @param {string} firstAndLast string with first and last name
 * 
 * @return {object} Person the person object
 */
 function Person(firstAndLast) {
   this.firstName = firstAndLast.split(" ")[0];
   this.lastName = firstAndLast.split(" ")[1];
 }

 Person.prototype.getFullName = function() {
   return `${this.firstName} ${this.lastName}`;
 }

Person.prototype.getFirstName = function() {
  return this.firstName;
}

Person.prototype.getLastName = function() {
  return this.lastName;
}

Person.prototype.setFirstName = function(firstName) {
  this.firstName = firstName;
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.setLastName = function(lastName) {
  this.lastName = lastName;
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.setFullName = function(fullName) {
  this.firstName = fullName.split(" ")[0];
  this.lastName = fullName.split(" ")[1];
  return `${this.firstName} ${this.lastName}`;
}