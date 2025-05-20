document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    var movie = document.getElementById('movie').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var seats = parseInt(document.getElementById('seats').value);

    if (!movie || !date || !time || !seats || seats < 1 || seats > 10) {
        alert("Please fill all fields correctly.");
        return;
    }

    // Price calculation
    var pricePerSeat = 150;
    var totalPrice = seats * pricePerSeat;

    // Display booking summary
    document.getElementById('movie-name').textContent = "🎬 Movie: " + movie;
    document.getElementById('movie-date').textContent = "📅 Date: " + date;
    document.getElementById('movie-time').textContent = "⏰ Time: " + time;
    document.getElementById('seats-count').textContent = "💺 Seats: " + seats;
    document.getElementById('total-price').textContent = "💵 Total Price: ₹" + totalPrice;

    // Show booking summary
    document.getElementById('booking-summary').style.display = 'block';
});
