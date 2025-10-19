//STEP 1
function halfNumber(n) {
    window.console.log('Half of', n, 'is', n/2+'.');
}
//STEP 2
function squareNumber(n) {
    window.console.log('The result of squaring the number', n, 'is', n*n+'.');
}
//STEP 3
function percentOf(m, n) {
    window.console.log(m + ' is ', ((m*100)/n) + '% of ' + n + '.');
}
//STEP 4
function findModulus(m, n) {
    window.console.log(n%m + ' is the modulus of ' + m + ' and ' + n + '.');
}
//STEP 5
function sumNumbers() {
    var data = window.prompt('Sum Numbers\nEnter the numbers(separated by commas):');
    var numbers = data.split(',');
    var i, sum = 0;
    for(i=0;i<numbers.length;i++)
        sum += parseInt(numbers[i]);

    window.console.log('Sum of numbers:', sum);
}

var m, n;
var option = window.prompt('Choose operation: \n1.Halve Number\n2.Square Number\n3.Percent Of\n4.Find Modulus\n5.Sum of Numbers\n');

if(option == 1) {
    n = window.prompt('Half Number\nEnter the number: ');
    halfNumber(n);
}
else if(option == 2) {
    n = window.prompt('Square Number\nEnter the number: ');
    squareNumber(n);
}
else if(option == 3) {
    m = window.prompt('Percent Of\nEnter first number: ');
    n = window.prompt('Percent Of\nEnter second number: ');
    percentOf(m, n);
}
else if(option == 4) {
    m = window.prompt('Find Modulus\nEnter first number: ');
    n = window.prompt('Find Modulus\nEnter second number: ');
    findModulus(m, n);
}
else if(option == 5) {
    sumNumbers();
}
else {
    window.alert('Please enter a correct operation.');
}