const express = require('express');

const server = express();



server.all('/', (req, res)=>{

   res.setHeader('Content-Type', 'text/html');

   res.write('<html><link href="https://fonts.googleapis.com/css?family=Roboto Condensed" rel="stylesheet"><body> <style> body {font-family: "Roboto Condensed";font-size: 22px;} <p>Hosting Active</p></style></body></html>');

   res.end();

})



function keepAlive(){

   server.listen(3000, ()=>{console.log("Szerver betöltve💬")});

}



module.exports = keepAlive;