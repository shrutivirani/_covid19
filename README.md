## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

###  `npm install` 
It installs required module for this project 

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Project Overview
This website can be accessed live using the link: https://shrutidomadiyacovid19.netlify.app/

This is a simple website for COVID-19 data in Germany. It uses the rki-covid-api by marlon360.

The website displays various datas like Total Cases,Total Deaths,Total Recovered, Cases per 100K, Week Incidence and Cases per Week for Germany from January 2020 on homepage. Also the weekly statistics up to last four weeks can be viewed by selecting last weeks from drop down tab on the homepage. The graph is used to compare the daily cases, Deaths and Recovery for weekly statisists. Furthermore, the datas discussed above can also be accesed for individual states in Germany by going to States tab.

Note: The rki-covid-api used to fetch data to the website has a limit of 15 APIs request per minute in order to prevent abuse as it is free API service. This website calls one API request on load and additionl four API requests for viewing each weekly statistics. Hence the website cannot get data from API if we have already called 15 APIs in a minute. Hence if the data is not displayed, the page needs to be refreshed after on minute and it works again.
