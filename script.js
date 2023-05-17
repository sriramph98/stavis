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