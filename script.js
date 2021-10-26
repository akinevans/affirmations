// TODO:Animate on button press as well as page reload.

//Declare button variables
var happyBtn = document.getElementById("happyBtn");
var calmBtn = document.getElementById("calmBtn");
var sadBtn = document.getElementById("sadBtn");
var nervousBtn = document.getElementById("nervousBtn");
var hurtBtn = document.getElementById("hurtBtn");
var angryBtn = document.getElementById("angryBtn");

//Declare message arrays
var happyMessages = [
  "When I feel happy I manifest more reasons to be happy.",
  "I accept that happiness is my true nature.",
  "I choose to pursue peace and harmony every day of my life.",
  "I am proud of myself.",
  "Am willing to accept myself unconditionally",
];

var calmMessages = [
  "All I need to do right now is breathe.",
  "My need to feel calm is being fully met.",
  "Everything is well in this moment.",
  "I love and accept myself.",
  "I am comfortable and satisfied with myself.",
];

var sadMessages = [
  "I pursue happiness regardless of the circumstances.",
  "My sadness does not define me.",
  "I am in charge of my life, and my happiness and I feel happy and content.",
  "Not everybody will understand my situation, and thats okay.",
  "I am a work in progress, and I welcome every positive change.",
];

var nervousMessages = [
  "I am resilient in the face of any challenge.",
  "I am strong and I am enough.",
  "Just like before, Ill survive this situation.",
  "My past experiences cant stop me from succeeding in the future.",
  "All is well with me.",
];

var hurtMessages = [
  "Negative opinions have no place in my mind.",
  "Good things belong to me.",
  "I am not defined by my past pain and hurts.",
  "I have patience with myself.",
  "I am able to love and receive love.",
];

var angryMessages = [
  "I can feel my anger and still stay in control.",
  "I can do better next time.",
  "I can express my anger in a respectful way.",
  "I remember to breathe deeply when I feel angry.",
  "This anger is temporary.",
];
//Define text area
var textArea = document.getElementById("message_text");

//Declare function
function generateMessage(event) {
  // Declare variable for event target
  var x = event.target;
  //Declare variable for generating random number
  /*TODO: Why is randomNumber not working?*/
  var randomNumber = Math.floor(Math.random());
  // write if statements for each possible event (btn)
  if (x.id == "happyBtn") {
    textArea.innerHTML =
      happyMessages[Math.floor(Math.random() * happyMessages.length)];
    // console.log(randomNumber * happyMessages.length);
  } else if (x.id == "calmBtn") {
    textArea.innerHTML =
      calmMessages[Math.floor(Math.random() * calmMessages.length)];
  } else if (x.id == "sadBtn") {
    textArea.innerHTML =
      sadMessages[Math.floor(Math.random() * sadMessages.length)];
  } else if (x.id == "nervousBtn") {
    textArea.innerHTML =
      nervousMessages[Math.floor(Math.random() * nervousMessages.length)];
  } else if (x.id == "hurtBtn") {
    textArea.innerHTML =
      hurtMessages[Math.floor(Math.random() * hurtMessages.length)];
  } else if (x.id == "angryBtn") {
    textArea.innerHTML =
      angryMessages[Math.floor(Math.random() * angryMessages.length)];
  }
  console.log(x.id);
}

//connect buttons to function
happyBtn.onclick = generateMessage;
calmBtn.onclick = generateMessage;
sadBtn.onclick = generateMessage;
nervousBtn.onclick = generateMessage;
hurtBtn.onclick = generateMessage;
angryBtn.onclick = generateMessage;
