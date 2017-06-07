# news-app
A command line app that fetches news articles powered by https://newsapi.org

## To get started
1. Get an API key from https://newsapi.org/ 
2. Create a `.env` file in your root folder and add your api key in this format: `API_KEY = {your api key}`
Please do not disclose your API key to anybody.
2. Run `npm install`

## To Use App
You need to specify 
  * News source
  * Category

Some of the news sources include:
1. al-jazeera-english
2. bbc-news
3. business-insider
4. cnn
5. espn
6. hacker-news
7. daily-mail
8. techcrunch
9. the-newyork-times
10. the-verge

News categories are as follows:
1. top
2. latest
3. popular

Example command
Run `node app/index.js cnn latest`
