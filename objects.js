const str = 'here is a string it is kinda long'
console.log(str.legth);

const age = 23

if (age >= 21 && age <= 99) {
  console.log('have a beer')
} else {
  console.log('have a juice box')
}

// object time

const expense = {
  id: 1,
  location: 'baja burrito',
  price: '1324',
  purpose: 'lunch back when that was a thing',
  code: '100ab' 
}

// write a function that takes in an expense object
// if the price (in pennies) is greater than 1500
// add a key of approved with a value false
// otherwise add a key of approved with a value of false
//  return the expense object
//  and log it



const priceChecker = (expenseObject) => {
  if (expenseObecjet.price > 1500) {
    expenseObject.approved = false;
  } else {
    expenseObject.approved = true;
  }
}

console.log(priceChecker(expense))
// console.log('expense object before ', expense)

expense.employeeNumber = 1001;

// console.log('expense object after ', expense)

// console.log(expense.location);

// console.log(expense['location'])



// const newObj = {
//   id: 1,
// }

// const newerObj = {
//   id: 1,
// }

// console.log(newObj === newerObj) //read false. diffirent object


// challenge
