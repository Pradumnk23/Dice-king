// Player-1
var randomnum1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage = "dice" + randomnum1 + ".png";
var randomimagesource = "images/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);

// Player-2

var randomnum2 = Math.floor(Math.random() * 6) + 1;
var randomimagesource2 = "images/dice" + randomnum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);

// Conditions

if (randomnum1 > randomnum2) {
    document.querySelector("h1").innerHTML = "Hurray! Player 1 Wins!";

} 

else if (randomnum2 > randomnum1) {
    document.querySelector("h1").innerHTML = "Congrats Player 2";
} 

else {
    document.querySelector("h1").innerHTML = "Oops! Lets play again";
}


