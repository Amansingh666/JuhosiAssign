
var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
const ejs = require('ejs');



const mysql = require('mysql2');

// Create a MySQL connection pool
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Amanishere0600',
  database: 'database_assingment'
});
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function(req, res, next) {
  
  connection.query('SELECT * FROM customer', function(err, results) {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

  
    const data = processData(results);

    ejs.renderFile(path.join(__dirname, '../public/admin.html'), { data: data }, function(err, renderedHtml) {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      
      res.send(renderedHtml);
    });
  });
});

// Function to process the retrieved data
function processData(results) {
  
    // Initialize variables to store the sums
    let customer1QuantitySum = 0;
    let customer1WeightSum = 0;
    let customer1BoxCountSum = 0;
  
    let customer2QuantitySum = 0;
    let customer2WeightSum = 0;
    let customer2BoxCountSum = 0;
  
    // Iterate through the results and calculate the sums
    results.forEach((row) => {
      if (row.auth_id === 1) {
        customer1QuantitySum += row.quantity;
        customer1WeightSum += row.weight;
        customer1BoxCountSum += row.box_count;
      } else if (row.auth_id === 2) {
        customer2QuantitySum += row.quantity;
        customer2WeightSum += row.weight;
        customer2BoxCountSum += row.box_count;
      }
    });
  
    // Calculate the total sums
    const totalQuantitySum = customer1QuantitySum + customer2QuantitySum;
    const totalWeightSum = customer1WeightSum + customer2WeightSum;
    const totalBoxCountSum = customer1BoxCountSum + customer2BoxCountSum;
  
    // Return the processed data object
    return {
      customer1: {
        quantity: customer1QuantitySum,
        weight: customer1WeightSum,
        boxCount: customer1BoxCountSum
      },
      customer2: {
        quantity: customer2QuantitySum,
        weight: customer2WeightSum,
        boxCount: customer2BoxCountSum
      },
      total: {
        quantity: totalQuantitySum,
        weight: totalWeightSum,
        boxCount: totalBoxCountSum
      }
    };
  }
  


module.exports = router;


