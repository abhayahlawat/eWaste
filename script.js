// Get the dropdown menu and the nav links
var sidemenu = document.getElementById("sidemenu");
var dropdown = document.querySelector('.nav-links .has-dropdown .dropdown');
var navLinks = document.querySelectorAll('.nav-links .nav-link');

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-240px";
}

function toggleDropdown(event) {
  event.stopPropagation(); // Stop the click event from bubbling up

  dropdown.classList.toggle('show');

  // Get the "Contact" and "Login" links
  var contactLink = document.querySelector('.nav-links .nav-link a[href="/contact.html"]');
  var loginLink = document.querySelector('.nav-links .nav-link a[href="/login.html"]');

  // Toggle the "shift-down" class on the "Contact" and "Login" links
  contactLink.parentElement.classList.toggle('shift-down');
  loginLink.parentElement.classList.toggle('shift-down');

  // Toggle the display property of the dropdown menu
  if (dropdown.classList.contains('show')) {
    dropdown.style.display = "block";
    // Rotate the arrow icon when the dropdown is open
    dropdownParent.querySelector('.fa-caret-down').style.transform = "rotate(180deg)";
  } else {
    dropdown.style.display = "none";
    // Rotate the arrow icon back when the dropdown is closed
    dropdownParent.querySelector('.fa-caret-down').style.transform = "rotate(0deg)";
  }
}

// Get the dropdown parent link
var dropdownParent = document.querySelector('.nav-links .has-dropdown > a');

// Add click event listener to the dropdown parent
dropdownParent.addEventListener('click', toggleDropdown);

// Close the dropdown menu when clicking outside
document.addEventListener('click', function(event) {
  var isClickInsideDropdown = dropdown.contains(event.target) || dropdownParent.contains(event.target);
  if (!isClickInsideDropdown && dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');

    // Reset the "shift-down" class on the "Contact" and "Login" links
    var contactLink = document.querySelector('.nav-links .nav-link a[href="/contact.html"]');
    var loginLink = document.querySelector('.nav-links .nav-link a[href="/login.html"]');
    contactLink.parentElement.classList.remove('shift-down');
    loginLink.parentElement.classList.remove('shift-down');

    // Hide the dropdown menu
    dropdown.style.display = "none";
  }
});
