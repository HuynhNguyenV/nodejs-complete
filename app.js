const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizaUser = (userName, userAge, userHasHobby) => {
    return `Name is ${userName}, age is ${userAge}, and the user has hobbies: ${userHasHobby}`;
}

// Add
const add = (a, b) => a + b;
// Add one
const addOne = a => a + 1;
// Add random
const addRandom = () => 1 + 2;

console.log(add(1,2));
console.log(addOne(2));
console.log(addRandom());
console.log(summarizaUser(name, age, hasHobbies));
