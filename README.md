# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

This is a simple website for COVID-19 data in Germany. It uses the rki-covid-api by marlon360.

The website displays various datas like Total Cases,Total Deaths,Total Recovered, Cases per 100K, Week Incidence and Cases per Week for Germany from January 2020 on homepage. Also the weekly statistics up to last four weeks can be viewed by selecting last weeks from drop down tab on the homepage. The graph is used to compare the daily cases, Deaths and Recovery for weekly statisists. Furthermore, the datas discussed above can also be accesed for individual states in Germany by going to States tab.

Note: The rki-covid-api used to fetch data to the website has a limit of 15 APIs request per minute in order to prevent abuse as it is free API service. This website calls one API request on load and additionl four API requests for viewing each weekly statistics. Hence the website cannot get data from API if we have already called 15 APIs in a minute. Hence if the data is not displayed, the page needs to be refreshed after on minute and it works again.

Overview
cases, deaths, recovered
week incidence
new cases, deaths, recovered (difference to yesterday)
R value (reproduction)
vaccinations
data per state and district
time series for every state and district
maps for states and districts
number of performed PCR-test, number of positive tests and positivity rate
cases and deaths per age group
