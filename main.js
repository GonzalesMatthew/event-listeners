console.log("CONNECTED");

//CALLBACK FUNCTIONS
// ability to pass a function a function

// create two new functions
function sayHello (name) {
  return `Hello ${name}!`;
}
function sayGoodbye (name) {
  return `Goodbye ${name} :(`;
}

// create a callback function which references the two functions above
function dynamic(name, cb) {
  return cb(name);
}

// log your callback function
console.log(dynamic('Matt', sayHello)); // 'Hello Matt!'
console.log(dynamic('Matt', sayGoodbye)); // 'Goodbye Matt :('
