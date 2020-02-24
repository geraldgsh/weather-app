# Microverse Project Title - Weather APP
[Solo Project]
Javascript

### Snapshot

![](https://github.com/geraldgsh/weather-app/blob/feature/img/ami.screenshot.JPG)

### Introduction.
The Weather App project comes at the end of the Asynchronous Javascript and APIs section of the Javascript course. It tests the knowledge of the student about asynchronous communication with promises or async/await and when to use them.

You can find the original project specification at: https://www.theodinproject.com/courses/javascript/lessons/weather-app

### Project Objectives

Use everything we’ve been discussing to create a weather forecast site using the weather API from the previous lesson. You should be able to search for a specific location and toggle displaying the data in Fahrenheit or Celsius.

You should change the look of the page based on the data, maybe by changing the color of the background or by adding images that describe the weather. (You could even use the Giphy API to find appropriate weather-related gifs and display them). Feel free to use promises or async/await in your code, though you should try to become comfortable with both.

1. Set up a blank HTML document with the appropriate links to your JavaScript and CSS files.
```html
<!DOCTYPE html>
<html lang='en'>
<head>
<title>Weather APP</title>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
  <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
  <link href='style.css' rel='stylesheet'>
</head>
<body>
  <nav id="level" class="level">
    <div class="level-item has-text-centered">
      <div>
        <h3 class="title is-3">Weather APP</h3>
      </div>
    </div>
    <div class="level-item has-text-centered rows">
      <div class="row">
        <div class="field has-addons">
          <div class="control">
            <input id="cityInput" class="input" type="text" placeholder="city">
          </div>
          <div class="control">
            <a id="citySearch" class="button is-info">
              Search
            </a>
          </div>
        </div>	
        <div class="field">
          <button id="unit" class="is-primary button is-rounded">Celsius</button>
          <button id="clearAll" class="is-danger button is-rounded">Clear All</button>
        </div>
      </div>
    </div>	
    <div id="localWeather" class="level-item has-text-centered">
    </div>
  </nav>
  <section class="container">
    <div class="card-container" id="list">
    </div>
  </section>
</body>
<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>
<script src="main.js"></script>
</script>
</html>
```

2. Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. For now, just console.log() the information.
```sh
List of functions and eventlisteners

start()
function toggle()
const toggleTime
const purge

const localCelsius = (tempLocal)
const localFahrenheit = (tempLocal)
const renderLocalCard = (localCity, localIcon)
const fetchLocalCityWeather = (cityName, unit)
const fetchLocalCityName = (unit = 'metric')

const updateLocalStorage = (arr)
const foreignCelsiusTemp = (mainTemp, id)
const foreignFahrenheitTemp = (mainTemp, id)
const foreignCelsiusFeel = (feel, id)
const foreignFahrenheitFeel = (feel, id)
const foreignCelsiusMin = (min, id)
const foreignFahrenheitMin = (min, id)
const foreignCelsiusMax = (max, id)
const foreignFahrenheitMax = (max, id)
const getflickrImg = (foreignCityName, id)
const getSunrise = (timezone, sunrise, id)
const getSunset = (timezone, sunset, id)
const renderForeignCard = (description, foreignIcon, foreignPressure, humidity, windSpeed, timezone, name, id)
const fetchForeignCityWeather = (cityName, id, unit = 'metric')
const toggleRender = (unit)
const addCityToList = (cityName)
const checkCity = (cityInput)
const findCity = ()
const citySearch = (()
```


3. Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.
```sh
See above
```

Set up a simple form that will let users input their location and will fetch the weather info (still just console.log() it).
```html
<div class="control">
  <input id="cityInput" class="input" type="text" placeholder="city">
</div>
<div class="control">
  <a id="citySearch" class="button is-info">
    Search
  </a>
</div>
```
          
4. Display the information on your webpage!
```sh
```

5. Add any styling you like!

```css
html,
body {
  font-family: 'Titillium Web', sans-serif;  
  background: url(https://lh3.googleusercontent.com/p/AF1QipOWQOnc5H1KaoL3RA5dV1Vvn75adsXwlCG52KP_=s1600-w1600) no-repeat center center fixed;
  background-size: cover;
  color: white; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;  
  min-height: 100vh;  
  text-shadow: 2px 2px black;
}

.title {
  color:white;
  text-shadow: 2px 2px black;
}

.field {
  padding-left: 10px;
}

.level {
  height: 180px;
}

.card-container{
  display: grid;  
	grid-template-columns: repeat(auto-fill, minmax(380px,6fr));
  grid-gap: 1em;
}

.card{
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  height: max-content;
}

.card-header {
  background-color: rgb(0, 0, 0, 0.3);
  height: 150px;  
}

.right-col {
  background-color: rgba(0, 0, 0, 0);
}

.card-content {
  background-color: rgb(0, 0, 0, 0.3);
}

#cityImage {
  height: 150px;
  padding:0;
  margin:0;
  width: 218px;  
}

#cityImage img {
  border: none;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@media only screen and (max-width: 768px) {
  #localWeather {
    display: none;
  }
}
```

### Linter Setup

Clone file [content](https://github.com/microverseinc/linters-config/tree/master/javascript) into root directory (except for readme.md)

Install ESLint on Linux environment using the following commands

Install Node Version Manager to update NodeJS + NPM.

```sh
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

$export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

$[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Run the following command to verify installation;

```sh
$ command -v 
nvm
```

To download, compile, and install the latest release of node, do this.

```sh
nvm install node
```

Source [here](https://github.com/nvm-sh/nvm#installing-and-updating)

Go project folder using WSL environment and initiate NPM with following command

```sh
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (weather-app)
version: (1.0.0)
description: Weather Application
entry point: (webpack.config.js) src/index.js
test command:
git repository: (https://github.com/geraldgsh/weather-app.git)
keywords:
author: Gerald Goh
license: (ISC)
About to write to /mnt/d/Google_Drive/Microverse/5.Javascript/5.API/weather-app/package.json:

{
  "name": "weather-app",
  "version": "1.0.0",
  "description": "Weather Application",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/geraldgsh/weather-app.git"
  },
  "author": "Gerald Goh",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/geraldgsh/weather-app/issues"
  },
  "homepage": "https://github.com/geraldgsh/weather-app#readme"
}
```

Command above will generate a "package.json" file for ESlint work off from.

Install ESlint with following command

```sh
$ npm install eslint
npm notice created a lockfile as package-lock.json. You should commit this file.
+ eslint@6.8.0
added 123 packages from 83 contributors and audited 179 packages in 8.979s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Run the following to configure eslint in project root folder

```sh
$ eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.1.0 eslint-plugin-import@^2.18.2
? Would you like to install them now with npm? Yes
Installing eslint-config-airbnb-base@latest, eslint@^5.16.0 || ^6.1.0, eslint-plugin-import@^2.18.2
npm notice save eslint is being moved from dependencies to devDependencies
+ eslint-config-airbnb-base@14.0.0
+ eslint@6.8.0
+ eslint-plugin-import@2.20.1
added 61 packages from 37 contributors, updated 1 package and audited 387 packages in 8.597s

16 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Successfully created .eslintrc.json file in 
/weather-app
ESLint was installed locally. We recommend using this local copy instead of your globally-installed copy.
```

with the following setup;

`? How would you like to use ESLint?` To check syntax, find problems, and enforce code style

`? What type of modules does your project use?` JavaScript modules (import/export)

`? Which framework does your project use?` None of these

`? Does your project use Typescript` No

`? Where does your code run?` Browser

`? How would you like to define a style for your project?` Use a popular style guide

`? Which style guide do you want to follow?` Airbnb

`? What format do you want your config file to be in?` JSON

`? The config that you've selected requires the following dependencies: Would you like to install them now with npm?` Yes

Start ESlint with this command.

```sh
eslint script.js
```

#### Setup Webpack watch

Now we'll create the following directory structure, files and their contents:

Create;
./webpack.config.js

```javascript
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
```

Webpack can watch files and recompile whenever they change. Turn on watch mode. This means that after the initial build, webpack will continue to watch for changes in any of the resolved files.

```javascript
./package.json

{
  "name": "restaurant-page",
  "version": "1.0.0",
  "description": "Restaurant Page",
  "main": "src/index.js",
  "scripts": {
    "build": "webpack --mode development",
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch"
  },
  .
  .
```

Run "yarn build"

```javascript
$ yarn build
yarn run v1.21.1
$ webpack --mode development
Hash: 87bba94788336242806f
Version: webpack 4.41.6
Time: 102ms
Built at: 02/21/2020 5:33:18 AM
  Asset      Size  Chunks             Chunk Names
main.js  12.3 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/index.js] 1.23 KiB {main} [built]
[./src/modules/DOMControl.js] 3.12 KiB {main} [built]
[./src/modules/localControl.js] 1.6 KiB {main} [built]
Done in 2.67s.
```

Or run "yarn watch" to start.
```javascript
$ yarn watch

yarn run v1.21.1
$ webpack --watch

webpack is watching the files…

Hash: c1487def981e257fe947
Version: webpack 4.41.6
Time: 392ms
Built at: 02/21/2020 5:34:39 AM
  Asset      Size  Chunks             Chunk Names
main.js  1.55 KiB       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js + 2 modules 5.96 KiB {0} [built]
    | ./src/index.js 1.23 KiB [built]
    | ./src/modules/DOMControl.js 3.12 KiB [built]
    | ./src/modules/localControl.js 1.6 KiB [built]
```

#### Steps to publish Page to Githack

1. Navigate to "dist/index.html" on GitHub Page Repo then copy URL (step #1) as illustrated below

![](https://github.com/geraldgsh/restaurant-page/blob/development/dist/media/Github-index.jpg?raw=true)

2. Go to https://raw.githack.com/, paste GitHub directory into input box (step #2) to generate URL (step #3) illustrated below.

![](https://github.com/geraldgsh/restaurant-page/blob/development/dist/media/githack.jpg?raw=true)

#### Weather APP
This is a weather app built with Bulma, Webpack, Bootstrap, JS, CSS & HTML.

### Wiki

Checkout our [wikipage](https://github.com/geraldgsh/weather-app/wiki) for more details. 

#### Live Demo
[Demo](https://rawcdn.githack.com/geraldgsh/weather-app/64d18f01c9e4f1bfda310899c965565f47bcba4b/dist/index.html)

#### Getting Started
Clone repo and run index.html

#### Prerequisites
Web browser like Chrome, Mozilla or similar.

### Original Project Source
https://www.theodinproject.com/courses/javascript/lessons/weather-app

### Github Repo
https://github.com/geraldgsh/weather-app


👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)

Twitter: [geraldgsh](https://github.com/geraldgsh)

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/weather-app/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.
