//global variables go here
var username;
var city;
var color;
var button;
var nameLabel;
var colorLabel;
var cityLabel;
var resetbutton;
var title;
var age;
var nameElement;
var cityElement;


function setup() {
  //set up your form here
  noCanvas();

  button = createButton("Submit");
  button.style("font-family","karla");
  button.position(200,400);

  button.mousePressed(makeProfile);
  button.mouseOver(hover);
  button.mouseOut(nohover);

  title = createElement("h1","Generate Your Own Profile:");
  title.style("font-family","karla");
  title.style("font-size","35px");


  

  nameLabel = createElement("h2", "what's your name?");
  nameLabel.style("font-family","karla");
  username = createInput();

  ageLabel= createElement("h2", "how old are you?");
  ageLabel.style("font-family","karla");
  age = createInput();

  colorLabel = createElement("h2", "what's your favorite color?");
  colorLabel.style("font-family","karla");
  color = createInput();

  cityLabel = createElement("h2", "where are you from?");
  cityLabel.style("font-family","karla");
  city = createInput();

}

function makeProfile(){

	var submittedName = username.value();
	var submittedCity = city.value();
	var submittedColor = color.value();
  var submittedAge = age.value();

	username.hide();
	city.hide();
	color.hide();
	button.hide();
	nameLabel.hide();
	colorLabel.hide();
	cityLabel.hide();
  title.hide();
  ageLabel.hide();
  age.hide();

	resetbutton = createButton("Reset");
	button.position(100,100);

		resetbutton.mousePressed(showElements);
    resetbutton.mouseOver(hover);
    resetbutton.mouseOut(nohover);

	
    for (var x=0;x<100;x++){
	var cityElement = createElement('h2', submittedCity);
  	cityElement.style("color",submittedColor);
  	cityElement.position(random(windowWidth),random(windowHeight));

  }

  	var nameElement = createElement('h2', submittedName);
  	nameElement.position(440,300);
  	nameElement.style("font-family","karla");
  	nameElement.style("font-size","70px");

    for (var x=0;x<100;x++){
    var ageElement = createElement ('h3', submittedAge);
    ageElement.style("color","white");
  }
}

function showElements(){

  username.show();
  city.show();
  color.show();
  button.show();
  button.position(200,350);
  ageLabel.show();
  nameLabel.show();
  colorLabel.show();
  cityLabel.show();
  title.show();
  resetbutton.hide();
  age();

  


}

function hover(){

  button.style("background-color","pink");
  resetbutton.style("background-color","pink");

}


function nohover(){

  button.style("background-color","white");
  resetbutton.style("background-color","white");
}



//write your custom functions here