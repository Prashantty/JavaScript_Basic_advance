"use strict";
class Ractangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    GetArea() {
        return this.length * this.breadth;
    }
}
const MyResult = new Ractangle(10, 12);
console.log(MyResult.GetArea());
//# sourceMappingURL=interface.js.map