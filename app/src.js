'use strict';

require('dotenv').config();
const https = require('https');
const apiKey = process.env.API_KEY;
let s_No = 1;

function getNews (source, sortBy) {
    let requestURL = 'https://newsapi.org/v1/articles?source='+source+'&sortBy='+sortBy+'&apiKey='+apiKey;

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
                    let category;
                    let newsBody;
                    
                    if (sortBy == 'latest') {
                        category = "LATEST NEWS: \n";
                    }
                    else if (sortBy == 'top') {
                        category = "TOP NEWS: \n";
                    }
                    else if (sortBy == 'popular') {
                        category = "POPULAR NEWS: \n";
                    }
                    console.log(category);

                    let articles = newsDetails.articles;
                    for(let x=0; x<articles.length; x++){

                        //Retrieve News Headline
                        let headline = newsDetails.articles[x].title;
                        newsBody =  headline;

                        //Retrieve Author
                        let author = newsDetails.articles[x].author;
                        newsBody +=  '\nWritten By: ' + author

                        //Retrieve Date
                        let date = newsDetails.articles[x].publishedAt;
                        date = date.slice(0, 10);
                        newsBody +=  '\nDate: ' + date

                        //Retrieve News Link
                        let url = newsDetails.articles[x].url;
                        newsBody +=  '\nRead more: ' + url;

                        console.log(s_No + ") " + newsBody + '\n');
                        s_No++;
                    }
                    console.log('\nNews App is Powered By https://newsapi.org/');
                    
                }
                catch(error) {
                    console.log(error);
                }
                
            }
            else {
                console.log('Request was not successful. Please check your connectionand try again.');
            }

        });

    });
}

module.exports.getNews = getNews;
