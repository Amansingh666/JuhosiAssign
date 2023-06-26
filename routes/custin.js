
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
/* GET users listing. */

  app.use(express.static(path.join(__dirname, 'public')));
/* GET home page. */
router.get('/', function(req, res, next) {
    
  res.sendFile(path.join(__dirname, '../public/CustomerInput.html'));
  

  
});
router.post('/', function(req, res, next) {
 
  const order_date = req.body.item1;
  const company = req.body.alphanumeric_input;
  const owner = req.body.alphanumeric_input_2;
  const item = req.body.item4;
  const quantity = req.body.item5;
  const weight = req.body.item6;
  const shipment_request = req.body.item7;
  const tracking_id = req.body.item8;
  const shipment_size = req.body.item9;
  const box_count = req.body.item10;
  const specification = req.body.item11;
  const checklist_quantity = req.body.item12;
  const auth_id = req.session.auth_id;
   
  
  
  // Assuming you have a MySQL connection pool named 'connection' established

  // Generate the insertion query
  const insertQuery = `
    INSERT INTO customer (order_date, company, owner,item, quantity, weight,shipment_request, tracking_id, shipment_size, box_count, specification, checklist_quantity,auth_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  // Prepare the data for insertion
  const data = [
    
    order_date, company, owner,item, quantity, weight,shipment_request, tracking_id, shipment_size, box_count, specification, checklist_quantity,auth_id
  ];

  // Execute the insertion query
  connection.query(insertQuery, data, function(err, results) {
    if (err) {
      console.error(err);
      console.log(err);
      console.log(order_date,company,auth_id);
     return res.redirect('/custin');
    }

    // Handle successful insertion
    // ...

    res.send('Data inserted successfully');
  });
});


module.exports = router;
