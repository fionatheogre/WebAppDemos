/* PUT YOUR SETUP CODE HERE (requires, initialization, port number, etc.) */

const path = require('path');
const express = require('express');

// This code reads the word list into the wordlist array
// You can read in enwords.txt for English, frwords.txt for French, or spwords.txt for Spanish
// You need the 'uft8' argument to get the words as text, not binary
const fs = require('fs');
let wordlist = [];
fs.readFile(path.join(__dirname, 'enwords.txt'), 'utf8', function (err, data) {
    wordlist = data.split('\n');
});


/* PUT YOUR DEFAULT ROUTE CODE HERE - app.get('/', ... );  */

const app = express();
const port = 8080
/* PUT YOUR app.get CODE HERE to return the next or previous set of words in the wordlist array.
    You may want to return the list of words as a JSON string for easier parsing
    on the client side.  You can do this by using res.json(list) instead of res.send(list)
*/

app.get("/words", function(req, res) {
    const index = req.query.index;
    res.json(wordlist.slice(index, index+20));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'main.html'));
});

// This is the code that starts the server listening for requests
let server = app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});


