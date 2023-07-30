const arr = [23,4,5];
let myFunction = a =>{
    console.log(a)
}
const arr2 = [...arr, 2,3,4];
myFunction(arr2[1])