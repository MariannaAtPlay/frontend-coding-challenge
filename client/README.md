This project was created with [Create React App](https://github.com/facebook/create-react-app) and [Reactstrap](https://reactstrap.github.io/)

To see the project, from inside the `client` directory, run:

`npm install`  
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To change a card's state, click on the card's menu and choose "Edit". Currenlty only "Edit" and "Publish" menus are functional. Click "Submit" to save chnages.

Notes: 
* I updated the cards.json file to contain unique IDs as I needed to be able to identify which card is being updated. All the data is inside of the `_data.js` file.
* I've also created a couple of "fake" API functions to simulate a slow network request and lay the groundwork for possibly working on the bonus.
* If this was a real application, I would've recompiled Bootstrap CSS to add custom color variables. Here for simplicity I defined all custom CSS classes inside of App.css

I hope you enjoy! Constructive and kind feedback is appreciated!

Marianna
