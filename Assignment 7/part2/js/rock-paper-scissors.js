var userChoice, computerChoice;
const MAX = 4;
const MIN = 1;

function choiceInWords(n) {
    if(n == 1)
        return "Rock";
    else if(n == 2)
        return "Paper";
    else if(n == 3)
        return "Scissors";
    
    return "";
}

while(1) {
    computerChoice = Math.floor(Math.random() * ((MAX - MIN) + MIN));

    do {
        userChoice = window.prompt('Choose:\n1.Rock\n2.Paper\n3.Scissors');
    }
    while(userChoice != "Rock" && userChoice != "Paper" && userChoice != "Scissors");

    computerChoice = choiceInWords(computerChoice);

    if(userChoice != computerChoice) break;

    window.alert("Tie. Both Players chose " + computerChoice);
}

if(userChoice == "Rock") {
    if(computerChoice == "Paper") {
        window.alert('User: ' + userChoice + ' Computer: ' + computerChoice + '. Computer Won.');
    }
    
    if(computerChoice == "Scissors") {
        window.alert('User: ' + userChoice + ' Computer: ' + computerChoice + '. User Won.');
    }
}

if(userChoice == "Paper") {
    if(computerChoice == "Rock") {
        window.alert('User: ' + userChoice, ' Computer: ' + computerChoice + '. User Won.');
    }
    
    if(computerChoice == "Scissors") {
        window.alert('User: ' + userChoice + ' Computer: ' + computerChoice + '. Computer Won.');
    }
}

if(userChoice == "Scissors"){
    if(computerChoice == "Rock") {
        window.alert('User: ' + userChoice + ' Computer: ' + computerChoice + '. Computer Won.');
    }
    
    if(computerChoice == "Paper") {
        window.alert('User: ' + userChoice + ' Computer: ' + computerChoice + '. User Won.');
    }
}