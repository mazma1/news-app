'use strict';

const newsSrc = require("./src"); 
let source = process.argv.slice(2)[0];  //Returns an array of arguments passed from CL
let sortBy = process.argv.slice(2)[1]; 

newsSrc.getNews(source, sortBy);

