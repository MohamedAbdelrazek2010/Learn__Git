"use strict";
const App = (x, y) => {
    return x + y;
};
App(3, 5);
const arr = [1, 2, 3, 4, 5];
arr.map((item) => {
    console.log(item * 2);
});
arr.filter((item) => item < 3);
console.log(arr);
class Seko {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Seko("seko", 13);
