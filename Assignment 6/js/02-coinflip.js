var coinFlip = Math.floor(Math.random()*100);

var choice = window.prompt("Heads or Tails?");
var check = "";

if(coinFlip < 50)
    check = "heads";
else
    check = "tails";

if(choice.toLowerCase() == "heads") {
    if(check == "heads")
        window.alert("The flip was heads and you chose heads...you win!");
    else
        window.alert("The flip was heads but you chose tails...you lose!");
}
else {
    if(check == "heads")
        window.alert("The flip was tails but you chose heads...you lose!");
    else
        window.alert("The flip was tails and you chose tails...you win!");
}