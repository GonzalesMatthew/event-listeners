console.log("CONNECTED");

const firstObj = {}; 

const user = {
  username: 'biz.markie',
  password: 'abc123',
  lovesJavascript: true, 
  favoriteNumber: 42,
}

// How to access objects values
// DOT NOTATION
// Get values out of an object
// console.log(user.lovesJavascript);
// console.log(user.username);

// BRACKET NOTATION
// will give you Uncaught ReferenceError: password is not defined
// console.log(user[password]);

// using bracket notation it has to be a string inside the bracket, or a variable
// variable 
// const password = 'password';
// console.log(user[password]);

// string
// console.log(user['username']);
// console.log(user['favoriteNumber']);

// dot notation , again 
// console.log(user.favoriteNumber);

// so that is simple basics on how to access object's value 
// so if you can't access it with dot notation, then bracket notation is an option to try 
// depends on what your program is doing and what you are trying to do 

// ASSIGNING VALUES

const newUser = {
  isNew: true, 
}
// add a key value pair is like dot assignment

newUser.username = 'fresh.prince';

// console.log(newUser);

// could also assign using bracket notation

newUser['password'] = 'abcd1234';
// console.log(newUser);

// notice the object keys will be displayed alpha-numerically in your console,
// not necesarily in the order you added them


// ANONYMOUS FUNCTIONS
// i.e. METHODS (FUNCTIONS AS VALUES)
// we can have functions in an object
// it doesn't have a function name!

// can have function use object value within its own object
const newObject = {
  username: 'Teresa',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  }
}

// and so reassigning the username can change what your object is putting out
// newObject.username = 'Aja';
// newObject.sayHello()

// ITERATE OVER AN OBJECT
// cycles through each key value pair
const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz890',
  lovesJavascript: true,
  favoriteNumber: 12,

}

// FOR IN LOOP
for (let key in userTwo) {
  console.log(key); // keys
  console.log(userTwo[key]); // values
  // console.log(userTwo.key); // dot notation won't work here!
}
