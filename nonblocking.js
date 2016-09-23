/**
 * Created by Jungle on 22/09/2016.
 */

//link to filesystem library
var fs = require('fs');

// load food list asynchronously

// Read the food.txt file, parameters are filename, encoding, and CALL BACK FUNCTION
// Callback function parameters are what you expect (error, or list of food)
var food = fs.readFile('food.txt','utf8', function(err, food) {
    if (err){
        console.log(err);
    }
    else{
        console.log(food);
    }

});


// It will print the header first, because the readFile command is non-blocking
console.log('FOOD');

//repeat with drinks

var drinks = fs.readFile('drinks.txt','utf8',function(err, drinks) {

    if (err){
        console.log(err);
    }

    else {
        console.log('\nDRINKS');
        console.log(drinks);
    }
});

