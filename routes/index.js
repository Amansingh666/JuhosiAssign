var express = require('express');
var router = express.Router();
var path = require('path');
const app = express();
const mysql = require('mysql2');


// Create a MySQL connection pool
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Amanishere0600',
  database: 'database_assingment',
});

app.use(express.static(path.join(__dirname, 'public')));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/Login.html'));
});

router.post('/', function(req, res, next) {
  const username = req.body.username; // Assuming username is submitted in the request body
  const password = req.body.password; // Assuming password is submitted in the request body

  // Perform authentication using MySQL query
  connection.query(
    'SELECT * FROM auth WHERE username = ? AND password = ?',
    [username, password],
    function(err, results) {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      if (results.length > 0) {
        // Authentication successful
        if (username === 'admin') {
          // Redirect to admin.js
          return res.redirect('/admin');
        } else {
          // Redirect to other page for non-admin users
          let authid;
          if (username === 'customer1') {
            authid = 1;
            console.log(authid)
          } else if (username === 'customer2') {
            authid = 2;
          } 
          req.session.auth_id = authid;
          res.redirect('/custin');
        }
      } else {
        // Authentication failed
        console.log("authentication failed");
        return res.redirect('/');

      }
    }
  );
});
module.exports = router;
