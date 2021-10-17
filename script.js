console.log("test");

var happyBtn = document.getElementById("happyBtn");

var excitedBtn = document.getElementById("excitedBtn");

// function call wont work if you use () with the onclick assignment. Example:
//happyBtn.onclick = msg(); <-- wont work

happyBtn.onclick = msg;
excitedBtn.onclick = msg;

function msg() {
  console.log("btn works");
}
