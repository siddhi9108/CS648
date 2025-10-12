var i, coinFlip;

for (i = 1; i <= 10; i++) {
    coinFlip = Math.round(Math.random());

    if (coinFlip == 0)
        window.console.log("Heads");
    else
        window.console.log("Tails");
}