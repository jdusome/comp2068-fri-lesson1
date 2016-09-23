/**
 * Created by Jungle on 22/09/2016.
 */
// link to node's filesystem module to read text files


    //fs has functions for reading and writing files
var fs= require('fs');

//open and read food list
var food = fs.readFileSync('food.txt','utf8');

// print a food heading and list of food
console.log('FOOD');
console.log(food);


// open and read drink list
var drinks = fs.readFileSync('drinks.txt','utf8');

//print a drink heading and list of drinks
console.log('\nDRINKS');
console.log(drinks);


