fetch('/admin')
  .then(response => response.json())
  .then(data => {
    // Update the table cells with the respective values
    document.getElementById('r1c2').textContent = data.customer1.quantity;
    document.getElementById('r1c3').textContent = data.customer2.quantity;
    document.getElementById('r1c4').textContent = data.total.quantity;

    document.getElementById('r2c2').textContent = data.customer1.weight;
    document.getElementById('r2c3').textContent = data.customer2.weight;
    document.getElementById('r2c4').textContent = data.total.weight;

    document.getElementById('r3c2').textContent = data.customer1.boxCount;
    document.getElementById('r3c3').textContent = data.customer2.boxCount;
    document.getElementById('r3c4').textContent = data.total.boxCount;
  })
  .catch(error => console.error(error));