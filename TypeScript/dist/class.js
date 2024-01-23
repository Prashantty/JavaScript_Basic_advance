"use strict";
class Person {
    constructor(name, pra, pras) {
        this.name = name;
        this.name1 = pra;
        this.name2 = pras = "Kumar";
    }
    getName() {
        return this.name;
    }
}
const person = new Person("Jane", "Prashant", "hello");
console.log(person.getName());
console.log(person.name1);
console.log(person.name2);
class Employee {
    constructor(name) {
        this.name = name;
    }
    GetName() {
        return this.name;
    }
}
const employee1 = new Employee("Prashant Kumar");
console.log(employee1.GetName());
//# sourceMappingURL=class.js.map