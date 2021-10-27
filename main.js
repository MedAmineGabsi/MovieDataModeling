function makeMovie(title, director, duration, releaseDate, rating) {
  return {
    title: title,
    director: director,
    duration: duration,
    releaseDate: releaseDate,
    rating: rating,
  };
}

var movie1 = makeMovie(
  "Venom : Let There Be Carnage",
  "Andy Serkis",
  97,
  2021,
  4.2
);
var movie2 = makeMovie(
  "Demon Slayer: Kimetsu no Yaiba - Le Train de l'Infini",
  "Haruo Sotozaki",
  117,
  2020,
  4.9
);
var movie3 = makeMovie(
  "Sword Art Online Progressive: Aria of a Starless Night",
  "Ayako Kōno",
  97,
  2021,
  NaN
);
var movie4 = makeMovie("Avengers : Endgame", "Joe Russo", 182, 2019, 4.7);
var movie5 = makeMovie(
  "Batman v Superman : L'Aube de la justice",
  "Zack Snyder",
  151,
  2016,
  4.1
);

function displayMovie(movie) {
  return `the movie's name is ${movie.title}, 
  the director is ${movie.director}, 
  it has been released on ${movie.releaseDate} 
  and has a duration of ${movie.duration}`;
}

var movies = [movie1, movie2, movie3, movie4, movie5];

function displayMovies(movies) {
  var display = "";
  for (let i = 0; i < movies.length; i++) {
    display = display + (i + 1) + ". " + displayMovie(movies[i]) + "\n";
  }
  return display;
}

function averageLength(movies) {
  var total = 0;
  for (let i = 0; i < movies.length; i++) {
    total += movies[i].duration;
  }
  var average = total / movies.length;
  var hours = Math.floor(average / 60);
  var minutes = (average % 60).toFixed();
  return `The average duration is ${hours} hours and ${minutes} minutes`;
}

function averageRating(movies) {
  var total = 0;
  for (let i = 0; i < movies.length; i++) {
    total += movies[i].rating;
  }
  var average = (total / movies.length).toFixed(1);
  return `tha average rating of the movies is ${average}`;
}

//Bonus Function

function removeMovie(title, movies) {
  for (let i = 0; i < movies.length; i++) {
    if (title == movies[i].title) {
      movies.splice(i, 1);
    }
    continue;
  }
}
