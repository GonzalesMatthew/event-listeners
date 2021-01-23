// console.log("CONNECTED");

//ALWAYS ADD YOUR SELECTORS TO THE TOP OF YOUR JS SO YOU KNOW
//WHAT YOU HAVE AVAIABLE
const button =document.querySelector('#main-btn');
const container = document.querySelector('#container');

// button.addEventListener('click', (event)=> {
//   console.log(`You clicked ${event.target.id}!`);
//   console.log(event);
// // you can target specific attributes 
//   console.log(event.target.id);
// })

//The above is not reusable
//RESUABLE FUNCTION
const whatIsTheId = (event) => {
// to see what attributes you have access to on your event you can
// console log your event
// you'll see in your console a dropdown arrow which has a list of attributes
// in it to choose from. manipulate at will!
  console.log(event);

  console.log(`You clicked ${event.target.id}!`);

  if (event.target.id === 'main-btn') {
    // .innerHTML replaces your HTML inside that div
    container.innerHTML = 'You clicked the MAIN BUTTON';
  } else {
    container.innerHTML = 'You clicked the OTHER BUTTON';
  }
}            

//TARGET first button and on click, run whatIsTheId
button.addEventListener('click', whatIsTheId);

//TARGET 'second-btn' and on click, run whatIsTheId
const buttonTwo = document.querySelector('#second-btn');

buttonTwo.addEventListener('click', whatIsTheId);
