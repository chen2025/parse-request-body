const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require('http');

let server = http.createServer((req, res) => {
    let reqBody = '';
    req.on('data', (data) => {
      reqBody += data;
    });

    req.on("end", () => {
        // your code for parsing the request body string into an object...
        req.body = parseBody(reqBody);

        sendFormPage(req, res); // needs to be called even if the request doesn't have a body
      });

});

const port = 5000;

server.listen(port, () => console.log('Successfully started the server on port', port));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
