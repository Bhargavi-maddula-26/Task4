// scripts.js

// Destination Data
const destinations = [
    { name: 'Varanasi(Uttar Pradesh)', country: 'India' },
    { name: 'Udaipur(Rajasthan)', country: 'India' },
    { name: 'Rishikesh (Uttarakhand)', country: 'India' },
    { name: 'Alleppey(Kerala)', country: 'India' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Kodaikanal', country: 'India' },
    { name: 'Bordeaux', country: 'France' },
    { name: 'Strasbourg', country: 'France' },
    { name: 'Musee d Orsay', country: 'France' },
    { name: 'Luxembourg Gardens', country: 'France' },
    { name: 'paris', country: 'France' },
    { name: 'Melbourne', country: 'Indonesia' },
    { name: 'yogyakarta', country: 'Indonesia' },
    { name: 'Gili Island', country: 'Indonesia' },
    { name: 'Antipolo', country: 'Philippines' },
    { name: 'Manila', country: 'Philippines' },
    { name: 'Jaipur', country: 'India' },
    { name: 'Pondichery', country: 'India' },
    { name: 'Nigth Safari', country: 'Indonesia' },
    { name: 'Bali', country: 'Indonesia' },
    { name: 'Singapore Flyer', country: 'Singapore' },
    { name: 'Opera house Sydney', country: 'Australia' },
    { name: 'Dolomites', country: 'Italy' },
    { name: 'Universal Studios Singapore', country: 'Singapore' },
    { name: 'Cruise the Kimberley', country: 'Australia' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Clarke Quay', country: 'Singapore' }
  ];
  
  const countrySelect = document.getElementById('country');
  const destinationSelect = document.getElementById('destination');
  const confirmationMessage = document.getElementById('confirmationMessage');
  const bookingForm = document.getElementById('bookingForm');
  
  // Update destinations based on selected country
  countrySelect.addEventListener('change', function () {
    const selectedCountry = this.value;
    destinationSelect.innerHTML = '<option value="">--Select a Destination--</option>'; // Reset options
  
    const filteredDestinations = destinations.filter(d => d.country === selectedCountry);
    filteredDestinations.forEach(d => {
      const option = document.createElement('option');
      option.value = d.name;
      option.textContent = d.name;
      destinationSelect.appendChild(option);
    });
  });
  
  // Show confirmation message on form submission
  bookingForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
  
    confirmationMessage.style.display = 'block'; // Show the confirmation message
  
    // Optionally reset the form after displaying the message
    setTimeout(function() {
      bookingForm.reset(); // Reset the form fields
      confirmationMessage.style.display = 'none'; // Hide the confirmation message after a short delay
    }, 3000);
  });
  