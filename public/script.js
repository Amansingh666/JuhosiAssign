//Default submit off
var submitButton = document.getElementById('submitButton');
submitButton.disabled = true;
//alphanumeric validation for company and owner
var input1 = document.getElementById('alphanumeric_input');
input1.addEventListener('input', function(event) {
    var value = event.target.value;
    var alphanumericRegex = /^[A-Za-z0-9]+$/;
    if (!alphanumericRegex.test(value)) {
    event.target.setCustomValidity('Alphanumeric characters only');
    submitButton.disabled = true;
    } else {
    event.target.setCustomValidity('');

  
    
    }
});

var input2 = document.getElementById('alphanumeric_input_2');
input2.addEventListener('input', function(event) {
    var value = event.target.value;
    var alphanumericRegex = /^[A-Za-z0-9]+$/;
    if (!alphanumericRegex.test(value) ) {
    event.target.setCustomValidity('Alphanumeric characters only');
    submitButton.disabled = true;
    } else {
    event.target.setCustomValidity('');
    
    }
});
// formating input for integer values
var input3 = document.getElementById('item5');
input3.addEventListener('input', function(event) {
var value = event.target.value;
var intValue = parseInt(value, 10);
if (isNaN(intValue)) {
    event.target.value = '';
    submitButton.disabled = true;
} else {
    event.target.value = intValue;
    
}
});
// formating input for float values
var input4 = document.getElementById('item6');
input4.addEventListener('input', function(event) {
var value = event.target.value;
var floatValue = parseFloat(value).toFixed(2);
console.log(floatValue);
if (isNaN(floatValue) ) {
    event.target.value = '';
    submitButton.disabled = true;
} else {
    event.target.value = floatValue;
   
}
});

//validation for L*B*H
  var input5 = document.getElementById( 'item9' );
  var pattern = /^\d+(\.\d+)?\*\d+(\.\d+)?\*\d+(\.\d+)?$/;
  

  input5.addEventListener('input', function (event) {
    var value = event.target.value.trim();

    if (pattern.test(value) ) {
      event.target.setCustomValidity('');
      
    } else if(!pattern.test(value) ){
      event.target.setCustomValidity('Invalid input format');
      submitButton.disabled = true;
    }
  });
 


  function validateform() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var signInButton = document.getElementById("sign-in");

    if (username === "" || password === "") {
        signInButton.disabled = true;
    } else {
        signInButton.disabled = false;
    }
}
 
 
  
 // empty input / invalid input validation
function validate(){
    var item1 = document.getElementById("item1").value;
    var item4 = document.getElementById("item4").value;
    var item5 = document.getElementById("item5").value;
    var item6 = document.getElementById("item6").value;
    var item7 = document.getElementById("item7").value;
    var item8 = document.getElementById("item8").value;
    var item10 = document.getElementById("item10").value;
    var item11 = document.getElementById("item11").value;
    var item12 = document.getElementById("item12").value;  
    if (item1 === "" || item4 === "" || item5 === "" || item6 === "" || item7 === "" || item8 === "" || item10 === "" || item11 === "" || item12 === "") {
        submitButton.disabled = true;
    } else{
        submitButton.disabled = false; 
    }
}
