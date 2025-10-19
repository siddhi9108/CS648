/*eslint-env browser*/

//STEP 1
function showMessage() {
    window.alert('I have been clicked');
}

function main() {
    //STEP 2
    var x = window.document.getElementById('button2');
    x.onclick = function() {
        window.alert('I have been clicked');
    }
    //STEP 3
    var y = window.document.getElementById("button3");
    function z() {
        window.alert("I have been clicked.");
    }
    y.addEventListener("click", z);
    //STEP 4
    var a = window.document.getElementById("button4");
    a.addEventListener("click", function () {
        window.alert("I have been clicked.");
    });
    //STEP 5
    a.addEventListener("click", function () {
        window.alert("I have been clicked.");
    });
}

window.addEventListener("load", main);