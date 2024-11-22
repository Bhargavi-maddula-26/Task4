const places = [
    { name: 'Varanasi(Uttar Pradesh)', country: 'India', price: 89.8, rating: 4.8, image: 'images/varanasi.jpg' },
    { name: 'Udaipur(Rajasthan)', country: 'India', price: 80.0, rating: 4.6, image: 'images/Udaipur.jpg' },
    { name: 'Rishikesh (Uttarakhand)', country: 'India', price: 89.8, rating: 4.5, image: 'images/Rishikesh.jpg' },
    { name: 'Alleppey(Kerala)', country: 'India', price: 91.8, rating: 4.3, image: 'images/Alleppey.jpg' },
    { name: 'Darjeeling', country: 'India', price: 89.8, rating: 4.6, image: 'images/Darjeeling.jpg' },
    { name: 'Kodaikanal', country: 'India', price: 70.5, rating: 4.3, image: 'images/Kodaikanal.jpg' },
    { name: 'Bordeaux', country: 'France', price: 135.0, rating: 4.5, image: 'images/Bordeaux.jpg' },
    { name: 'Strasbourg', country: 'France', price: 130.0, rating: 4.8, image: 'images/Strasbourg.jpg' },
    { name: 'Musee d Orsay', country: 'France', price: 128.0, rating: 4.2, image: 'images/musee.jpg' },
    { name: 'Luxembourg Gardens', country: 'France', price: 110.0, rating: 4.5, image: 'images/paris1.jpg' },
    { name: 'paris', country: 'France', price: 105.0, rating: 4.8, image: 'images/paris.jpg' },
    { name: 'Melbourne', country: 'Indonesia', price: 120.0, rating: 4.5, image: 'images/Melbourne.jpg' },
    { name: 'yogyakarta', country: 'Indonesia', price: 126.0, rating: 4.1, image: 'images/yoga.jpg' },
    { name: 'Gili Island', country: 'Indonesia', price: 112.0, rating: 4.2, image: 'images/Gili-Islands.jpg' },
    { name: 'Antipolo', country: 'Philippines', price: 123.0, rating: 4.1, image: 'images/antipolo.jpg' },
    { name: 'Manila', country: 'Philippines', price: 116.0, rating: 4, image: 'images/Manila.jpg' },
    { name: 'Jaipur', country: 'India', price: 94.0, rating: 4.5, image: 'images/jaipur.jpg' },
    { name: 'Pondichery', country: 'India', price: 98.0, rating: 4.6, image: 'images/Pondicherry.jpg' },
    { name: 'Nigth Safari', country: 'Indonesia', price: 147.0, rating: 4.4, image: 'images/Safari.jpg' },
    { name: 'Bali', country: 'Indonesia', price: 160.0, rating: 4.8, image: 'images/Bali.jpg' },
    { name: 'Singapore Flyer', country: 'Singapore', price: 138.0, rating: 4.8, image: 'images/flyer.jpg' },
    { name: 'Opera house Sydney', country: 'Australia', price: 142.0, rating: 4.5, image: 'images/sidey.jpg' },
    { name: 'Dolomites', country: 'Italy', price: 155.0, rating: 4.8, image: 'images/dolomites.jpg' },
    { name: 'Universal Studios Singapore', country:'Singapore', price: 110.0, rating: 4.2, image: 'images/universe.jpg' },
    { name: 'Cruise the Kimberley', country: 'Australia', price: 160.0, rating: 4.8, image: 'images/ship.jpg' },
    { name: 'Rome', country:'Italy', price: 160.0, rating: 4.8, image: 'images/rome.jpg' },
    { name: 'Clarke Quay', country: 'Singapore', price: 140.0, rating: 4.5, image: 'images/querty.jpg' },
];

function displayPlaces(placesToDisplay) {
    const placeContainer = document.getElementById('place-list');
    const conversionRate = 83; // Example conversion rate: 1 USD = 83 INR
    placeContainer.innerHTML = '';
    placesToDisplay.forEach(place => {
        const placeElement = document.createElement('div');
        placeElement.classList.add('place');
        placeElement.innerHTML = `
            <img src="${place.image}" alt="${place.name}">
            <h3>${place.name}</h3>
            <p>Country: ${place.country}</p>
            <p>Price: $${place.price.toFixed(2)} / ₹${(place.price * conversionRate).toFixed(2)}</p>
            <p>Rating: ${place.rating.toFixed(2)} ⭐</p>
        `;
        placeContainer.appendChild(placeElement);
    });
}

function filterAndSortPlaces() {
    const country = document.getElementById('countryFilter').value; // Filter based on country
    const sortPrice = document.getElementById('sortPrice').value;
    const sortRating = document.getElementById('sortRating').value;

    // Filter by country
    let filteredPlaces = country === 'all'
        ? places
        : places.filter(place => place.country === country); // Use 'country' here

    // Sort by price
    if (sortPrice === 'low-to-high') {
        filteredPlaces.sort((a, b) => a.price - b.price);
    } else if (sortPrice === 'high-to-low') {
        filteredPlaces.sort((a, b) => b.price - a.price);
    }

    // Sort by rating
    if (sortRating === 'high-to-low') {
        filteredPlaces.sort((a, b) => b.rating - a.rating);
    } else if (sortRating === 'low-to-high') {
        filteredPlaces.sort((a, b) => a.rating - b.rating);
    }

    displayPlaces(filteredPlaces);
}

// Event listeners for filters and sorting
document.getElementById('countryFilter').addEventListener('change', filterAndSortPlaces);
document.getElementById('sortPrice').addEventListener('change', filterAndSortPlaces);
document.getElementById('sortRating').addEventListener('change', filterAndSortPlaces);

// Initial display
displayPlaces(places);

// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

// Show next image in the carousel
function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// Show previous image in the carousel
function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Update the carousel position based on the current index
function updateCarousel() {
    const newTransform = -100 * currentIndex + '%';
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransform})`; // Corrected here
}

// Auto-advance carousel every 3 seconds
setInterval(showNextImage, 3000);

// Event listeners for next/prev buttons
document.getElementById('nextBtn').addEventListener('click', showNextImage);
document.getElementById('prevBtn').addEventListener('click', showPrevImage);
