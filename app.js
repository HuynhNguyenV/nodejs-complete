const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['Sports', 'Cooking'];

// hobbies.forEach(function(hobby){
//     console.log(hobby)
// })

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
hobbies.push('Programming');
console.log(hobbies);

