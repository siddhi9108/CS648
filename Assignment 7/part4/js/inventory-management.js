/*eslint-env browser*/
var inventory = [   
    [ 4824, "Shirt", 10, 15.99],
    [ 6343, "Jeans", 22, 39.99],
    [ 3223, "Socks", 36, 9.99],
    [ 2233, "Hat", 12, 14.99],
    [ 9382, "Jacket", 5, 49.99]
];

var menuChoice = -1, i, j, skuNumber, newQuantity;
while(1) {
    window.console.log('Menu:\n=================\n1.View\n2.Update\n3.Exit\n');
    menuChoice = window.prompt('Enter you choice:');

    if(menuChoice == 1) {
        inventory.sort();
        for(i=0;i<inventory.length;i++) {
            window.console.log(inventory[i]);
        }
    }
    else if(menuChoice == 2) {
        var skuNumberFlag = false;
        skuNumber = window.prompt('Enter the sku number of the product: ');
        newQuantity = window.prompt('Enter the new quantity:');

        for(i=0;i<inventory.length;i++) {
            if(inventory[i][0] == skuNumber)
                skuNumberFlag = true;
        }

        if(!skuNumberFlag) {
            window.alert('sku number not found.');
            continue;
        }

        if(newQuantity < 0) {
            window.alert('Please enter a correct quantity value.')
            continue;
        }

        for(i=0;i<inventory.length;i++) {
            if(inventory[i][0] == skuNumber) {
                inventory[i][2] = parseInt(newQuantity);
            }
        }
    }
    else if(menuChoice == 3) {
        break;
    }
    else {
        window.alert('Incorrect Choice.')
    }

}
