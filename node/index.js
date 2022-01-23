const express = require("express");
const app = express();
var Moniker = require('moniker');
const port = 3000;
const config = {
  host:'db',
  user:'root',
  password:'root',
  database:'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);


app.get('/', (req, res) => {

  connection.query(`INSERT INTO people (name) VALUES ('${Moniker.choose()}')`);

  connection.query(`SELECT name FROM people`, (error, results, fields) => {
    res.send(`
     <div style="text-align: center;"><h1>Full Cycle Rocks!</h1></div>
      <hr>
      <ul>
        ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
      </ul>
      <hr>
     <div style="text-align: center;><h2>By Sérgio Santos</h2></div>
    `)
  });
});


app.listen(port, () => {
  console.log("Running in the port : " + port);
});
