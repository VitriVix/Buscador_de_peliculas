document.getElementById('searchButton').addEventListener('click', searchMovies);
const api_key = '&api_key=662e3850c8379c3f1d88404d6aade699';
const urlBase = 'https://api.themoviedb.org/3/search/movie?query='
const urlImg = 'https://image.tmdb.org/t/p/w500';

const resultContainer = document.getElementById('results');

function searchMovies() {
    resultContainer.innerHTML = 'Cargando...'
    const searchInput = document.getElementById('searchInput').value;

    fetch(`${urlBase}${searchInput}${api_key}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))

    document.getElementById('searchInput').value = '';
}

function displayMovies(movies){
    resultContainer.innerHTML = '';

    if (movies.length === 0){
        resultContainer.innerHTML = 'No se encontraron datos de tu busqueda!';
        return;
    }

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const movieTitle = document.createElement('h2');
        movieTitle.textContent = movie.title;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = movie.release_date;

        const overview = document.createElement('p');
        overview.textContent = movie.overview;

        const moviePost = document.createElement('img');
        moviePost.src = urlImg+movie.poster_path;

        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(moviePost);
        movieDiv.appendChild(releaseDate);
        movieDiv.appendChild(overview);
        resultContainer.appendChild(movieDiv)
    });
}