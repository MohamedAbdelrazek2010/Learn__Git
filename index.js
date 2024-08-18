var App = function (x, y) {
    return x + y;
};
App(3, 5);
var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
    console.log(item * 2);
});
arr.filter(function (item) { return item < 3; });
console.log(arr);
var Seko = /** @class */ (function () {
    function Seko(name, age) {
        this.name = name;
        this.age = age;
    }
    return Seko;
}());
var person = new Seko("seko", 13);
console.log(person.name);
