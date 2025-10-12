var count = window.prompt("Enter a number to start the countdown: ");

while(count >= 0) {
    window.document.write(count--);
    window.document.write("<br>");
}