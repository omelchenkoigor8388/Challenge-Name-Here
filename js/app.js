function toggleDarkMode() {
    var body = document.querySelector('body');
    var header = document.querySelector('header')

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode-header')
    
    var carts = document.querySelectorAll('.cart');
    carts.forEach(function(cart) {
      cart.classList.toggle('dark-mode-cart');
    });

    var staticsCarts = document.querySelectorAll('.statics-cart')
    staticsCarts.forEach(function(staticsCart) {
        staticsCart.classList.toggle('dark-mode-carts');
      });
  }

var checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', toggleDarkMode);