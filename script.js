//onScroll Animation

window.addEventListener('scroll', function() {
    var image = document.getElementById('rotateAnimation1');
    var image2 = document.getElementById('rotateAnimation2');
    var scrollAmount = window.pageYOffset;
    
    // Adjust the rotation amount as desired
    var rotationAmount = scrollAmount / 10;
    
    image.style.transform = 'rotate(' + rotationAmount + 'deg)';
    image2.style.transform = 'rotate(' + rotationAmount + 'deg)';
  });

  //Pop-Up Modal

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  //Footer Script
  window.addEventListener('scroll', function() {
    var div = document.getElementById('getAQuote');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
  
    // Calculate the distance from the bottom of the page
    var distanceFromBottom = documentHeight - (scrollPosition + windowHeight);
  
    // Set the opacity based on the distance from the bottom
    if (distanceFromBottom < 50) {
      // If within 50 pixels from the bottom, reduce opacity
      div.style.opacity = '0.1';
    } else {
      // Otherwise, restore opacity
      div.style.opacity = '1';
    }
  });

  //Get a Quote Form 

  function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var company = document.getElementById("company").value;
    var message = document.getElementById("message").value;

    // Send the data to the server using AJAX or fetch
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("company", company);
    formData.append("message", message);

    fetch("send_email.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(result => {
            console.log(result);
            // Handle the response from the server (e.g., show success message)
            closeForm(); // Close the form after successful submission
        })
        .catch(error => {
            console.error("Error:", error);
            // Handle the error (e.g., show error message)
        });
}
  
//Remove 000Webhost watermark

  document.querySelectorAll('a[href*="000webhost"]').forEach(e => e.remove());
  

