document.getElementById('searchButton').addEventListener('click', searchMovies)

let API_KEY = '06f6e1404fa47dd00db632d20d3c6473'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w500/'

let resultContainer = document.getElementById('results')

function searchMovies(){
    let searchInput = document.getElementById('searchInput').value
    resultContainer.innerHTML = 'Cargando...'
    fetch(`${urlBase}?query=${searchInput}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    resultContainer.innerHTML = ''

    if(movies.length === 0){
        resultContainer.innerHTML = '<p>No se encontraron resultados para tu busqueda </p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = movie.release_date

        let ovierview = document.createElement('p')
        ovierview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(ovierview)

        resultContainer.appendChild(movieDiv)
    })
}
