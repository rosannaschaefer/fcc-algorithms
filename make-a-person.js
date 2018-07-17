
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