var randomMath1  = Math.floor(Math.random()*6) + 1;
var dice1Image  = "images/dice" + randomMath1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",dice1Image);

var randomMath2 = Math.floor(Math.random()*6) +1;
var dice2Image = "images/dice" + randomMath2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",dice2Image);

var randomMath3 = Math.floor(Math.random()*6) + 1;
var dice3Image = "images/dice" + randomMath3 +".png";
document.querySelectorAll("img")[2].setAttribute("src",dice3Image);

var randomMath4 = Math.floor(Math.random()*6) + 1;
var dice4Image = "images/dice" + randomMath4 +".png";
document.querySelectorAll("img")[3].setAttribute("src",dice4Image);

if(randomMath1>randomMath2 && randomMath1>randomMath3 && randomMath1>randomMath4)
{
    document.getElementsByClassName("refresh")[0].innerHTML = "Wanna Play again Refresh Me";
    document.getElementsByClassName("head")[0].innerHTML = "Player1 wins!!";
}
else if(randomMath2>randomMath1 && randomMath2>randomMath3 && randomMath2>randomMath4)
{
    document.getElementsByClassName("refresh")[0].innerHTML = "Wanna Play again Refresh Me";
    document.getElementsByClassName("head")[0].innerHTML = "Player2 wins!!";
}
else if(randomMath3>randomMath1 && randomMath3>randomMath2 && randomMath3>randomMath4)
{
    document.getElementsByClassName("refresh")[0].innerHTML = "Wanna Play again Refresh Me";
    document.getElementsByClassName("head")[0].innerHTML = "Player3 wins!!";
}
else{
    document.getElementsByClassName("refresh")[0].innerHTML = "Wanna Play again Refresh Me";
    document.getElementsByClassName("head")[0].innerHTML = "Player4 wins!!";
}
