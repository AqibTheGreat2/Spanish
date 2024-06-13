window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('images/menspicture1');
  var reveals1 = document.querySelectorAll('images/menspicture2');
  var undertext = document.querySelectorAll('images/menspicture3');
  var subtitle = document.querySelectorAll('images/menspicture4');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }

  }
  for (var i = 0; i < reveals1.length; i++) {
    var windowHeight1 = window.innerHeight;
    var revealTop1 = reveals1[i].getBoundingClientRect().top;
    var revealPoint1 = 50;
    if (revealTop1 < windowHeight1 - revealPoint1) {
      reveals1[i].classList.add('active');
    } else {
      reveals1[i].classList.remove('active');
    }

  }
  for (var i = 0; i < undertext.length; i++) {
    var windowHeight2 = window.innerHeight;
    var revealTop2 = undertext[i].getBoundingClientRect().top;
    var revealPoint2 = 50;
    if (revealTop2 < windowHeight2 - revealPoint2) {
      undertext[i].classList.add('active');
    } else {
      undertext[i].classList.remove('active');
    }

  }
  for (var i = 0; i < subtitle.length; i++) {
    var windowHeight3 = window.innerHeight;
    var revealTop3 = subtitle[i].getBoundingClientRect().top;
    var revealPoint3 = 50;
    if (revealTop3 < windowHeight3 - revealPoint3) {
      subtitle[i].classList.add('active');
    } else {
      subtitle[i].classList.remove('active');
    }

  }

}

document.getElementById("add-to-cart").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var quantity = parseInt(document.getElementById("quantity").value);
  var itemSummary = `${quantity} item${quantity > 1 ? 's' : ''}`;
  var total = 50 * quantity; // Assuming each item costs $50
  
  // Update summary section
  document.getElementById("item-summary").textContent = itemSummary;
  document.getElementById("total").textContent = total;

  // Show summary and PayPal section
  document.getElementById("summary").classList.remove("hidden");
  document.getElementById("paypal-section").classList.remove("hidden");

  // Enable checkout button
  document.getElementById("checkout-btn").disabled = false;
});

document.getElementById("checkout-form").addEventListener("submit", function(event) {
  event.preventDefault();
  // Handle form submission
});

document.getElementById("checkout-btn").addEventListener("click", function() {
  alert("Thank you for your purchase!");
});
