'use strict';
require('dotenv').config();

const https = require('https');
const apiKey = process.env.API_KEY;
let s_No = 1;

function getNews (source, sortBy) {
    let requestURL = 'https://newsapi.org/v1/articles?source='+ source +'&sortBy=' + sortBy +'&apiKey=' + apiKey;

    // Send Get request to the API URL
    https.get(requestURL, function(response) {
        var body = ""; // Initialize variable to receive the bits of data as they come in

        response.on("data", function(chunk) { //Data event listener to handle chunks of data as they come in
            body += chunk;
        });

        response.on('end', function() { //End event listener to act when no more data is expected
            if(response.statusCode === 200){
                try { 
                    let newsDetails = JSON.parse(body);
                    let newsBody;
                    
                    if (sortBy == 'latest') {
                        newsBody = "Latest News";
                    }
                    else if (sortBy == 'top') {
                        newsBody == "Top News";
                    }
                    else if (sortBy == 'popular') {
                        newsBody == "Popular News";
                    }

                    //Retrieve News Headline
                    let headline = newsDetails.articles[title];
                    newsBody +=  "\n\n" + headline;

                    

                    console.log(s_No + ")") ;   
                    console.log(newsBody);
                    s_No++;
                }
                catch(error) {
                    console.log(error);
                }
                
            }
            else {
                console.log('Request was not successfully. Please check your connection.');
            }

        });

    });
}

getNews ('techcrunch', 'latest');
