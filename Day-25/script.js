const API_KEY = 'c2bd97d5'; 
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function fetchMovies(searchTerm) {
    fetch(`${API_URL}&s=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.Response === "True") {
                displayMovies(data.Search);
            } else {
                alert("No movies found!");
            }
        })
        .catch(error => console.error('Error fetching movie data:', error));
}

function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h2>${movie.Title}</h2>
            <p>${movie.Year}</p>
            <a href="https://www.imdb.com/title/${movie.imdbID}/"> View Details</a>
            `;

        movieContainer.appendChild(movieCard);
    });

    // Add event listeners for "More Info" buttons
    const moreInfoButtons = document.querySelectorAll('.more-info-button');
    moreInfoButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const imdbID = event.target.getAttribute('data-imdbid');
            fetchMovieDetails(imdbID);
        });
    });
}

function fetchMovieDetails(imdbID) {
    fetch(`${API_URL}&i=${imdbID}`)
        .then(response => response.json())
        .then(data => {
            displayMovieDetails(data);
        })
        .catch(error => console.error('Error fetching movie details:', error));
}

function displayMovieDetails(movie) {
    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = `
        <h2>${movie.Title}</h2>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <button class="close-button">Close</button>
    `;

    movieDetails.classList.remove('hidden');
    movieDetails.classList.add('visible');

    // Close button functionality
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        movieDetails.classList.remove('visible');
        movieDetails.classList.add('hidden');
    });
}

document.getElementById('search-button').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value;
    if (searchTerm) {
        fetchMovies(searchTerm);
    }
});

document.getElementById('search-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const searchTerm = document.getElementById('search-input').value;
        if (searchTerm) {
            fetchMovies(searchTerm);
        }
    }
});
