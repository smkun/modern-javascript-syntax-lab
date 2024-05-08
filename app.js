//EXERCISE 1
// Array map method
// Using map to create a new array where each element is multiplied by 2
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const doubledNums = nums.map((num) => num * 2);
// Logging the new array
console.log(doubledNums);

//EXERCISE 2
// Array destructuring
const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];
// Destructuring the array to extract the first two elements
const [firstTopping, secondTopping] = pizzaToppings;

// Logging the variables
console.log();
console.log(firstTopping); // Pineapple
console.log(secondTopping); // Olives

//EXERCISE 3
// Object destructuring
const car = {
    make: "Audi",
    model: "q5",
};

// Destructuring the object to create variables make and model
const { make, model } = car;

// Logging the variables
console.log();
console.log(make); // Audi
console.log(model); // q5

//EXERCISE 4
//Applying the spread operator on arrays
const pizzaToppings2 = ["Pineapple", "Olives", "Anchovies"];

// Duplicating the array using the spread operator
const controversialPizzaToppings = [...pizzaToppings2];

// Logging the new variable
console.log();
console.log("Controversial Pizza Toppings", controversialPizzaToppings); // ['Pineapple', 'Olives', 'Anchovies']

//Applying the spread operator on objects
const car2 = {
    make: "Audi",
    model: "q5",
};

// Duplicating the car object and modifying the model property
const myCar = { ...car2, model: "q7" };

//EXERCISE 5
// Logging both objects to compare them
console.log();
console.log(car2); // Logs: { make: 'Audi', model: 'q5' }
console.log(myCar); // Logs: { make: 'Audi', model: 'q7' }

//EXERCISE 6
//Dynamic keys in onjects
// Define a variable to use as a dynamic key
const propertyName = "username";

// Create the userProfile object with a dynamic key
const userProfile = {
    [propertyName]: "DarthMe",
};

// Logging the userProfile object to see the result
console.log();
console.log(userProfile); // Logs: { username: 'DarthMe' }

//EXERCISE 7
// Import and export
import name, { age, job } from "./exportingFile.js";
console.log();
console.log(name, age, job);

//EXERCISE 8
//Default paramerters
console.log();
function describeAnimal(noun = "cat", adjective = "white") {
    // Constructing and logging the sentence
    console.log(`The ${noun} is ${adjective}.`);
}

// Testing the function with default values
describeAnimal(); // Logs: 'The cat is white.'

// Testing the function with custom arguments
describeAnimal("dog", "black"); // Logs: 'The dog is black.'

//EXERCISE 9
//Terinary operator
let pizza = 'tasty';

// Using a ternary operator to simplify the if...else statement
console.log();
console.log(pizza === 'tasty' ? 'yum' : 'yuck');

//EXERCISE 10
//Boolean gates
// Simulated language configuration
console.log();
const localLangConfig = null; // Change to 'es', 'fr', etc., or keep it null

// Assigning LANG the value of localLangConfig or 'en' as a default
const LANG = localLangConfig || 'en';

// Logging the language setting
console.log('Language setting:', LANG);

// Simulated user theme preference
const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// Assigning USER_THEME the value of userSavedTheme or 'light' as a default
const USER_THEME = userSavedTheme || 'light';

// Logging the user theme setting
console.log('User theme setting:', USER_THEME);

//EXERCISE 11
//Optional chaining
console.log();
const adventurer = {
    name: 'Alice',
  };
  
  // Attempting to access `cat.age` using optional chaining
  let cat = adventurer.cat?.age;
  
  // Logging the result which should be `undefined` as `cat` does not exist on `adventurer`
  console.log(cat); // undefined
  
