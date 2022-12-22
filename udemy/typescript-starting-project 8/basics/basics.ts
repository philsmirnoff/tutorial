// Primitives

let age: number;
let userName: string;
let isInstructor: boolean;

// More Complex Types
let hobbies: string[]; // array of strings
hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
}; // object

person = {
  name: "Maximilian",
  age: 30
};

// array of object
let people: { name: string; age: number }[];



// Type inference

// let course = "React - The Complete Guide";
// course = 12345; // error


// Union Types allow to use multiple types for a variable
let course: string | number = "React - The Complete Guide";
course = 12345; // no error


// to avoid dublication of code, we can use type alias
type Combinable = number | string;
let course: Combinable = "React - The Complete Guide";
course = 12345; // no error


// Functions & types
function add(a: number, b: number): number {
  return a + b;
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
// that means that typescript can see that that the type of the array is the same as the type of the value. Generics allows you to write functions that are type safe and yet flexible.
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); // ['d', 'a', 'b', 'c']

