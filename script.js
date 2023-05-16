//onScroll Animation

window.addEventListener('scroll', function() {
    var image = document.getElementById('rotateAnimation');
    var scrollAmount = window.pageYOffset;
    
    // Adjust the rotation amount as desired
    var rotationAmount = scrollAmount / 10;
    
    image.style.transform = 'rotate(' + rotationAmount + 'deg)';
  });