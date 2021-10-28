function makeMovie(title, director, cast, duration, releaseDate, rating) {
  return {
    title: title,
    director: director,
    cast: cast,
    duration: duration,
    releaseDate: releaseDate,
    rating: rating,
  };
}

var movie1 = makeMovie(
  "Venom : Let There Be Carnage",
  "Andy Serkis",
  {
    Venom: "Tom Hardy",
    "Cletus Kassady": "Woody Harelson",
    Anne: "Michelle Williams",
    Shriek: "Naomie Harris",
  },
  97,
  2021,
  4.2
);

var movie2 = makeMovie(
  "Demon Slayer: Kimetsu no Yaiba - Le Train de l'Infini",
  "Haruo Sotozaki",
  {
    "Tanjirō Kamado": "Natsuki Hanae",
    "Nezuko Kamado": "Akari Kitō",
    "Inosuke Hashibira": "Yoshitsugu Matsuoka",
    "Zenitsu Agatsuma": "Hiro Shimono",
    "Kyojuro Rengoku": "Satoshi Hino",
  },
  117,
  2020,
  4.9
);

var movie3 = makeMovie(
  "Sword Art Online Progressive: Aria of a Starless Night",
  "Ayako Kōno",
  {
    "Kirigaya Kazuto": "Yoshitsugu Matsuoka",
    "Yuuki Asuna": "Haruka Tomatsu",
    Mito: "Inori Minase",
  },
  97,
  2021,
  NaN
);

var movie4 = makeMovie(
  "Avengers : Endgame",
  "Joe Russo",
  {
    "Tony Stark/Iron Man": "Robert Downey Jr.",
    "Captain America": "Chris Evans",
    "Natasha Romanoff/Black Widow": "Scarlett Johansson",
    Thor: "Chris Hemsworth",
    "Bruce Banner/Hulk": "Mark Ruffalo",
  },
  182,
  2019,
  4.7
);

var movie5 = makeMovie(
  "Batman v Superman : L'Aube de la justice",
  "Zack Snyder",
  {
    "Tanjirō Kamado": "Natsuki Hanae",
    "Nezuko Kamado": "Akari Kitō",
    "Inosuke Hashibira": "Yoshitsugu Matsuoka",
    "Zenitsu Agatsuma": "Hiro Shimono",
    "Kyojuro Rengoku": "Satoshi Hino",
  },
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
    display = display + (i + 1) + ". " + displayMovie(movies[i]) + "\n ";
  }
  return display;
}

function displayCast(movie) {
  var display = "";
  for (var key in movie.cast) {
    display += key + " -> " + movie.cast[key] + "\n";
  }
  return display;
}

function displayAllCast(movies) {
  var display = "";
  for (let i = 0; i < movies.length; i++) {
    display +=
      i + 1 + ". " + movies[i].title + "\n" + displayCast(movies[i]) + "\n";
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
