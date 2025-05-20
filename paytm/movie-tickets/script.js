document.getElementById('book-btn').addEventListener('click', function() {
    var movie = document.getElementById('movie').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var seats = document.getElementById('seats').value;

    if (date === "") {
        alert("Please select a date");
        return;
    }

    // Display booking summary
    document.getElementById('movie-name').textContent = "Movie: " + movie;
    document.getElementById('movie-date').textContent = "Date: " + date;
    document.getElementById('movie-time').textContent = "Time: " + time;
    document.getElementById('seats-count').textContent = "Seats: " + seats;

    // Show booking summary div
    document.getElementById('booking-summary').style.display = 'block';
});
