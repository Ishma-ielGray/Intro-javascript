const button = document.querySelector("button");
const heading = document.querySelector("h1");
const parGraph = document.querySelector("p");


button.addEventListener("click", function () {
    //1. Take the button and wait for a prompt using the addEventListener method.
    //2. Waiting on the prompt to be triggered using "click".
    const name = prompt("What is your name?");
    heading.textContent = `Hello, ${name}!`;
    const mood = prompt("How are you feeling today?");
    parGraph.textContent = `You are feeling ${mood} today.`;
    console.log("The code is working.");
    //4. Change the text content of the heading to say "Hello, [name]!" using template literals.
    //5. Log a message to the console that says "The button was clicked."

});