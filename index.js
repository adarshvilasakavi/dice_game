var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if(randomNumber1 > randomNumber2)
{
  document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Won🚩" ;
}
else if (randomNumber2 > randomNumber1) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Won🚩" ;
}
else {
  document.getElementsByTagName("h1")[0].innerHTML = "It's a Draw" ;
}

// First image
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Second image
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
