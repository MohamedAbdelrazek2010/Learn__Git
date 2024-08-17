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
