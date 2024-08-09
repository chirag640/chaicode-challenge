document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    fetchMovies(query);
});

document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = document.getElementById('search-input').value;
        fetchMovies(query);
    }
});

function fetchMovies(query) {
    const apiKey = 'c2bd97d5';
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayMovies(data.Search);
            } else {
                displayNoResults();
            }
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
        });
}

function displayMovies(movies) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));

    movies.forEach(movie => {
        const movieCard = `
            <div class="movie-card">
                <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
                <h3 class="movie-title">${movie.Title}</h3>
                <p class="movie-year">${movie.Year}</p>
                <a href="https://www.imdb.com/title/${movie.imdbID}/" class="more-info-btn">More Info</a>
            </div>
        `;
        resultsContainer.innerHTML += movieCard;
    });
}

function displayNoResults() {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '<p>No results found.</p>';
}
