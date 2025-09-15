// Select all "View Details" buttons
const viewButtons = document.querySelectorAll('.course a');

// Attach click event to each button
viewButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    // Get the href attribute
    const courseLink = button.getAttribute('href');

    // If link exists, navigate to it
    if(courseLink && courseLink !== '#') {
      window.location.href = courseLink;
    } else {
      // Otherwise, show an alert
      e.preventDefault();
      alert('Course details will be added soon! 🚀');
    }
  });
});
