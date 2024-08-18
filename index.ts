const App = (x: number , y: number) => {
  return x + y
}

App(3 , 5)

const arr = [1,2,3,4,5]

arr.map((item) => {
  console.log(item * 2)
})

arr.filter((item) => item < 3)

console.log(arr)

interface User {
  name: string;
  age: number;
}

class Seko implements User {
  constructor(
    public name: string,
    public readonly age: number,
  ) {}
}

const person = new Seko(
  "seko",
  13
)

console.log(person.name)
