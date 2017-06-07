'use strict';

const https = require('https');

function getNews (source, sortBy, apiKey) {
    let requestURL = 'https://newsapi.org/v1/articles?source='+ source +'&sortBy=' + sortBy +'&apiKey=' + apiKey;

    // Send Get request to the API URL
    https.get(requestURL, function(response) {
        var body = ""; // Initialize variable to receive the bits of data as they come in

        response.on("data", function(chunk) { //Data event listener to handle chunks of data as they come in
            body += chunk;
        });

        response.on('end', function() { //End event listener to act when no more data is expected
            if(response.statusCode === 200){
                // try { 
                    console.log(JSON.parse(body));
                // }
                
            }
            else {
                console.log('Request was not successfully. Please check your connection.');
            }

        });

    });
}


