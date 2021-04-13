This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Front-end Homework Assignment

![animated](https://5a2583d7dd16c25cb2e8-358d15e499fca729302e63598be13736.ssl.cf3.rackcdn.com/frontend/hw-example-animated.gif)

Based on the provided screenshots, make a simple `infinite-scroll` capable web application that allows for the user to browse items and favourite them.

### Requirements
* You are to use [Flickr API](https://www.flickr.com/services/api/flickr.photos.getRecent.html) (recommended) or a similar API for data retrieval. If you choose another API, make sure it supports paginated results, unique images with some metadata and a way for us to access it.
* Design should be recreated as closely as possible, including item hover state.
* Responsive design (with at least three breakpoints — Desktop, Tablet, Phone).
* Infinite scroll - it's a concept where additional data is loaded when user scrolls down the screen.
* A possibility to favourite an item (favourites should not be lost on page reload).
* It is preferred to use `React`, but you can write vanilla JS code as well (no other libraries/frameworks, though).
* You are only allowed to use `react`, `react-dom` and your choice of any development-environment specific libraries (testing tools, babel, etc). All other 3rd-party libraries are forbidden (`Redux`, `lodash`, `jQuery`, `axios`, `bootstrap`, etc).

### Tips
* To save time, work on the fundamentals first (API integration, infinite scrolling, favouriting) and polish things later.
* Make sure your project has everything needed for us to run and evaluate it on our machines.
* Great developers use great tools. Don’t be afraid to show what development tools you use (CSS pre-processors, Javascript task-runners, testing libraries, etc.)
* We won’t check for IE support, so we're saying a big **YES** to the usage of cutting-edge technologies available in modern browsers.
* You are not limited by plain JS: you can write your code in `TypeScript` or `Flow`.
* We haven’t included a Photoshop, Sketch or any other design tool source file for a reason. We believe that pixel-perfect implementation can only be achieved by understanding the design process and not by reading specifications available in source files.
* If you are not happy with your solution and don't have time to rework it, but still want to deliver on your commitment and send it to us, write down your ideas, better solutions, alternatives. We may take that into account when evaluating your work! :)

### Bonus

If you have time, you can work on additional functionality for your app. It is a great way to showcase more of your skills! However, we *highly suggest* working on these only if the required functionality is implemented and you are confident with your solution. :)

* Lazy-loading images.
* A responsive image solution (Save traffic by loading higher quality images only when it’s needed).
* Something cool that fits this project and would help proving your skills.

---
