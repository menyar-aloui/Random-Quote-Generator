let quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon"
];
let QUOTE=document.getElementById("quote");
let GENERATE=document.getElementById("generate");
function generateQuote(){
    let randomeindex= Math.floor(Math.random()*quotes.length);
    let indexquote= quotes[randomeindex];
    QUOTE.textContent=indexquote
}
// second method for the button where i should delete the onclick thing in the html button and add the comment down in the js
// generateButton.addEventListener('click', generateQuote);

// Initial quote generation on page load:call the function
// generateQuote();



