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

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
  
    var data = {
      name: name,
      message: message
    };
  
    fetch('send_email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.success) {
        alert('Email sent successfully!');
      } else {
        alert('Email sending failed.');
      }
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
  });
  

