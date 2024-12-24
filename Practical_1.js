console.log("Welcome to Movie Collection");


let movies = [
    { title: "The Shawshank Redemption", genre: "Drama", rating: 9.3, releaseYear: 1994 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Forrest Gump", genre: "Drama", rating: 8.8, releaseYear: 1994 },
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Matrix", genre: "Sci-Fi", rating: 8.7, releaseYear: 1999 }
];


function addMovie(title, genre, rating, releaseYear) {
    movies.push({ title, genre, rating, releaseYear });
    console.log(`Added movie: ${title}`);
}


function listMoviesByGenre(genre) {
    const moviesInGenre = movies.filter(movie => movie.genre === genre);
    console.log(`Movies in genre '${genre}':`);
    moviesInGenre.forEach(movie => console.log(`- ${movie.title} (${movie.releaseYear})`));
}


function highestRatedMovie() {
    const highest = movies.reduce((max, movie) => (movie.rating > max.rating ? movie : max), movies[0]);
    console.log(`Highest rated movie: ${highest.title} with rating ${highest.rating}`);
}


function listMovieTitles() {
    const titles = movies.map(movie => movie.title);
    console.log("List of all movie titles:");
    titles.forEach(title => console.log(`- ${title}`));
}


function moviesReleasedAfter(year) {
    const recentMovies = movies.filter(movie => movie.releaseYear > year);
    console.log(`Movies released after ${year}:`);
    recentMovies.forEach(movie => console.log(`- ${movie.title} (${movie.releaseYear})`));
}

function listMoviesByKey(keyword) {
const moviesWithKeyword = movies.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()));
console.log(`Movies with '${keyword}' in the title:`);
moviesWithKeyword.forEach(movie => console.log(`- ${movie.title} (${movie.releaseYear})`));
}

addMovie("Interstellar", "Sci-Fi", 8.6, 2014);


listMoviesByGenre("Drama");

highestRatedMovie();


listMovieTitles();


moviesReleasedAfter(2000);
listMoviesByKey("the");
