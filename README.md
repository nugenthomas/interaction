Building a customized page
======================

In this excercise you're going to build a form using javascript to create HTML elements. Then you'll create a page using the information that was submitted in the form. 

Open up the  `profile.js` file. 

Note: Since we are using HTML elements instead of p5 drawings we're not going to use a canvas. That's why you'll see `noCanvas();` in your `setup()` function.

**1: Create the fields**
First we'll need to create the fields in the form. We'll do this inside our `setup()` function.

In p5 you create text fields using the method `createInput()`. You'll want to save that field to a variable so you can make adjustments to it. For example, to create a field for their name you can say:

` username = createInput();`

(Don't use `name` as your variable, it will cause issues because that's a variable reserved for other things in javascript)

We're going to be referencing these variables inside of several functions later on, so we need to define them as global variables. That means instead of saying `var username = createInput();` inside of the `setup()` function, we say `var username;` at the very beginning of the javascript file, before the `setup()` function. Then we can use `username` anywhere in our program. If we didn't do that, we'd only be able to use username inside the `setup()` function.

Your javascript file should look something like this:

   
    //First define the empty global variable
    var username; 
    
    function setup() {
      noCanvas();
      username = createInput();
    }

Go ahead and set up 3 fields like this for name, city, and favorite color. 

Once you're done you should see three blank text fields on the webpage, all smushed together. 

**2: Label the fields**
Now we need to tell the user what these fields are for. We can do this with regular text labels. The way you do that in p5 is by creating an HTML element. You can use any type of text element, such as an `h1`,`h2`,`p`, or `span`. In this example we'll use an `h2`. You create elements using the `createElement()` function. It takes two parameters: the name of the element, and your text. Note that you'll have to surround both with quotes. And if your sentence has an apostrophe you'll want to use double quotes.

`nameLabel = createElement("h2", "What's your name?");`

This draws the text on the page. Note that you don't have to save the element to a variable. You could have just said `createElement("h2", "What's your name?");` but saving it to a variable lets you adjust it later. 

Go ahead and label all three fields. Remember to define all your label variables as global variables first, outside of the `setup()` function. You'll also see that these HTML elements get drawn in the order you write them, so you're going to want to put the label right before its respective field.

**3: Add a submit button**
Next we need a button to submit the form. p5 has a function called `createButton()` for this, that takes the text on the button as a parameter. You'll want to surround your text in quotes since it is a string, and also save the button to a new global variable so you can reference it later.

**4: Add an event listener**
Your form is built, but it doesn't do anything when you click that button. That's because you haven't attached an event listener to the button yet. Event listeners are functions that wait for a specific type of event to happen, and then call some other block of code when that event happens. 

There are a few different event listeners in p5, but the one we need is `mousePressed()` to know if the mouse clicked on the button. The way we use this function, is as a method on our button variable, like this:

`button.mousePressed(makeProfile);`

Note that I've passed it `makeProfile` as a parameter. That's the name of the function I want it to call when the button is clicked. You could call this function anything you want.

**5: Write the makeProfile function**
Our button is calling the makeProfile function, but it's going to throw an error because that function doesn't exist yet. We have to create it. Remember, we write functions like this:

    function makeProfile(){
      //code goes here
    }

Inside that function is where we can get the values the user submitted and do something with them. We get the values by calling the `.value()` method on our field. For example, to get the name they submitted you'd say:

`var submittedName = username.value();`

Go ahead and get the value for all three fields.  


**6: Clearing the form**

Now that you have saved the value from all three fields you'll want to clear the form and use those variables to draw their profile. You can hide any HTML element using the `hide()` method, like this: `username.hide();` 

Go ahead and hide all your form elements. 

**7: Use the submitted values to build the profile page**

Now that you have cleared the form and saved the submitted values, you can use those values to display what the user submitted. For example, you could add a new element that prints our their name:
`var nameElement = createElement('h2', submittedName);`

You can set the position of that element:

`nameElement.position(100,100);`

And you can adjust the CSS of that element using the `style()` method, which takes the name of the CSS property, and the value you are setting it to. For example, you can change the font color like this:

`nameElement.style("color",submittedColor);`

**8: Get creative**
Try using a for loop to write their name and/or city over and over again. You can randomly set the position of x and y using `random(windowWidth)` or `random(windowHeight)`.

Or try changing the size of the text using the CSS font-size property:

`nameElement.style("font-size","30px");`

Take a look at the reference at the bottom of these instructions for more things you can do with HTML elements.

**9: Style your form**
Go back to your form and give it some color and style. Some CSS properties you might want to try are `font-family`, `font-size`, `color`, `background-color`, `border`, `border-radius`,`box-shadow` and `font-weight`.


**Bonus**

 - Make your button react to a mouse hover using mouserOver(). Take a look at the button example.
 - Add more fields to your form
 - Add a button to the profile page to bring back the form so the user can fill out a new profile. You can un-hide elements using the `.show()` function. 

**Reference**
For a full list of methods and how to use them visit: 
http://p5js.org/reference/#/libraries/p5.dom

Methods you can use to **create** elements:
 - createDiv()
 - createP()
 - createSpan()
 - createA()
 - createButton()
 - createCheckbox()
 - createSelect()
 - createInput()
 - createSlider()

Methods you can use to **change** elements:
 - addClass()
 - removeClass()
 - child()
 - html()
 - position()
 - translate()
 - rotate()
 - style()
 - attribute()
 - value()
 - show()
 - hide()
 - size()
 - remove()