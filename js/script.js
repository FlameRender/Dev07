var greeting = '[not initialized] ';
var name = '[not initialized]';
var message = '[not initialized]';
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = '[not initialized]';
var tiles = 0;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

function initiateVariables(){

// Create variables for the welcome message
  greeting = 'Howdy ';
  name = 'Lisa';
  message = ', please check your order:';
  // Concatenate the three variables above to create the welcome message
  welcome = greeting + name + message;

  // Create variables to hold details about the sign
  sign = 'Montague House';
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

initiateVariables();
 
function setTextByID(theID, theText) {
  var el = document.getElementById(theID);
// Replace the content of that element with the personalized welcome message
  el.textContent = theText;
}

setTextByID('greetings', welcome); 
setTextByID('userSign', sign); 


// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;


setTextByID('subTotal', '$' + subTotal); 

// Get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;

// Note: textContent does not work in IE8 or earlier - see explanation on website

var clearOut = '[not intialized]';

function resetVars() {
 setTextByID('greetings', clearOut);
  setTextByID('userSign', clearOut);
  setTextByID('tiles', clearOut);
}

document.getElementById('btnPay').addEventListener('click',resetVars);