console.count("Welcome to JEFFREYCOM Partners");

const Gender; Any
Gender = "female";
console.log(Gender);

const FirstName = "Henry ";
const LastName = "James";
const age = 30;
const isAdmin = false;
const x = null;
const y = undefined;
console.log(
  "My name is " + FirstName + LastName + "." + "I am " + age + " years old."
);
console.log(`My name is ${FirstName}${LastName} I am ${age} years old.`);
console.log(typeof isAdmin);

const FirstName = "Henry ";

const LastName = "James";
const age = 30;
const isAdmin = false;
const x = null;
const y = undefined;
console.log(FirstName.toLowerCase());

const title = "welcome to my home";
console.log(title.length);
console.log(title.toUpperCase());
console.log(title.toLowerCase());
console.log(title.split(""));

const title = "welcome, ICT, Laptop, Router";
// console.log(title.length);
// console.log(title.toUpperCase());
// console.log(title.toLowerCase());
console.log(title.split(","));

const students = ["web", "home", "kitchen", 6, true];
students.pop();
students.unshift("computer");
students.push("table", "mouse", "maize");
students[6] = "gate";
console.log(students);
const person = {
  firstName: "Henry",
  lastName: "Peter",
  score: 40.5,
  isAdmin: false,
  hobbies: ["cooking", "Bet9ja", "boxing"],
  address: {
    city: "Owerri",
    lga: "Owerri-West",
    postalcode: 46013,
  },
  x: null,
  y: undefined,
};
const { firstName, lastName } = person;
console.log(firstName, lastName);
console.log(person.hobbies[1]);
console.log(person.firstName);
console.log(person.score);
console.log(person.isAdmin);
console.log(person.address.city);
console.log(person.hobbies[1]);
console.log(JSON.stringify(person));

ARRAYS AND ITS METHODS (recap of last class)
const cartitems = [
  {
    id: 1,
    productName: "Sugar",
    Quantity: 5,
    isPaid: false,
    catergory: "beverages",
    price: 1000,
  },
  {
    id: 2,
    productName: "Fridge",
    Quantity: 2,
    isPaid: false,
    catergory: "electronics",
    price: 1000,
  },
  {
    id: 3,
    productName: "Milk",
    Quantity: 5,
    isPaid: true,
    catergory: "beverages",
    price: 1000,
  },
  {
    id: 4,
    productName: "Milo",
    Quantity: 5,
    isPaid: false,
    catergory: "beverages",
    price: 2000,
  },
];
console.log(cartitems[1].productName);
console.log(cartitems[3].price);
console.log(cartitems[3]);
console.log(cartitems[0]);

LOOPING
FOR Loop
While Loop
For Each Loop
Map Loop
Filter Loop

for Loop
for (let i = 0; i < 20; i++) {
  console.log(i);
}
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

while loop
let i = 0;
while (i < 25) {
console.log(i);
i++;
console.log(`This is the loop of ${i}`);
i++;
}
leti=0 is assigning a variable

const cartitems = [
  {
    id: 1,
    productName: "Sugar",
    Quantity: 5,
    isPaid: false,
    catergory: "beverages",
    price: 1000,
  },
  {
    id: 2,
    productName: "Fridge",
    Quantity: 2,
    isPaid: false,
    catergory: "electronics",
    price: 1000,
  },
  {
    id: 3,
    productName: "Milk",
    Quantity: 5,
    isPaid: true,
    catergory: "beverages",
    price: 1000,
  },
  {
    id: 4,
    productName: "Milo",
    Quantity: 5,
    isPaid: false,
    catergory: "beverages",
    price: 2000,
  },
];
for (let i = 0; i <= cartitems.length; i++) {
  console.log(cartitems[i].productName);
}

for (items of cartitems) {
  console.log(items.productName);
}

let i = 0;
while (i <= cartitems.length) {
  console.log(cartitems[i].productName);
  i++;

  let i = 0;
}
while (i <= cartitems.length) {
  console.log(cartitems[i].catergory);
  i++;
}

FOREACH LOOP
cartitems.forEach(function (items) {
  console.log(items.productName);
});

MAP LOOP:It is a professional array looping method.
const store = cartitems.map(function (listItems) {
  return listItems.productName;
});
console.log(store);

FILTER LOOP:It is a professional array looping method.
Triple equal sign === is used to match variables

const store = cartitems
  .filter(function (listItems) {
    return listItems.isPaid === true;
  })
  .map(function (listItems) {
    return listItems.productName;
  });
console.log(store);

const store = cartitems
  .filter(function (listItems) {
    return listItems.price === 1000;
  })
  .map(function (listItems) {
    return listItems.productName;
  });
console.log(store);

const store = cartitems.filter(function (listItems) {
  return listItems.isPaid === false;
});
console.log(store);

// NEXT CLASS: CONDITION
// 1. CONDITIONAL RENDERING
// 2. FOREACH RENDERING
