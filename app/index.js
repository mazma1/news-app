'use strict';

const newsSrc = require("./src"); 
let inputArray = process.argv;  //Returns an array of arguments passed from CL
let source = inputArray[2];  
let sortBy = inputArray[3]; 

if(inputArray.length > 4 || inputArray.length < 4 ){
    console.log ("Two inputs are required to use News App.")
}

else {
    newsSrc.getNews(source, sortBy);
}


