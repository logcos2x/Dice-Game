var r1=Math.random()*6;
r1=Math.floor(r1)+1;
document.querySelector(".img1").setAttribute("src", "./images/dice"+r1+".png");

var r2=Math.random()*6;
r2=Math.floor(r2)+1;
document.querySelector(".img2").setAttribute("src", "./images/dice"+r2+".png");

if(r1>r2){
    document.querySelector("h1").innerHTML="🚩Player 1 Won!";
}
else if(r2>r1){
    document.querySelector("h1").innerHTML="Player 2 Won!🚩";
}
else{
    document.querySelector("h1").innerHTML="It's a draw!";
}