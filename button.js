//================================================
// This script creates a button that lets the 
// user set a random background color
//================================================


//we have to define the button varibale globally 
//because we need to use it in multiple functions
var button;


//set up the initial state of the page
function setup() {
  noCanvas();

  button = createButton('change the background color');
  button.mousePressed(pressed);
  button.mouseOver(hover);
  button.mouseOut(nohover);
  
}

//mousePressed event listener's function 
//which runs if the button is clicked 
function pressed(){

  var body = select("body");

  //Radom prudces a decimal number. You can wrap it in Math.floor() 
  //to round down and make it a whole number
  //CSS doesn't like it if you use a decimal for RGB values.
  var randomR = Math.floor(random(255));
  var randomG = Math.floor(random(255));
  var randomB = Math.floor(random(255));

  //CSS needs the rgb color formatted as rgb(0,200,255)
  var colorString = "rgb(" + randomR + "," + randomG + "," + randomB + ")";

  body.style("background-color",colorString);

}

//mouseOver's event listener function 
//which runs if the mouse hovers over the button
function hover(){

  button.style("background-color","red");

}

//mouseOut's event listener function 
//which runs if the mouse exits hovering the button
function nohover(){

  button.style("background-color","white");

}