// template literals are called back ticks `asfand`

let boy1 = "noni"
let boy2 = "hamza"
let friend = `boy2 is a friend of boy1`
console.log(friend)
 
// it will print boy2 is a friend of boy1

// but if i write

let boy3 = "noni"
let boy4 = "hamza"
let friend1 = `${boy2} is a friend of ${boy1}`
console.log(friend1)

// now it will print hamza is a friend of noni