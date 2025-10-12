var firstNo = window.prompt("Enter the first number:");
var secondNo = window.prompt("Enter the second number:");

if (firstNo > secondNo) {
    window.alert("Larger Number: " + firstNo);
}

else if (firstNo === secondNo){
    window.alert("Both Numbers are equal")
}

else
    window.alert("Large Number: " + secondNo);