// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  // Use map to create a new array of movie directors only
  const allDirectors = moviesArray.map(movie => movie.director);

  // Filter out duplicates by using the first index of each director's name
  return allDirectors.filter(
    (director, index) => allDirectors.indexOf(director) === index
  );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  // Filter moviesArray for 'Drama' genre and 'Steven Spielberg' director
  const spielbergDramaMovies = moviesArray.filter(
    movie =>
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
  );

  // Return the number of movies by accessing the length property of the new array
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  // If the array is empty, return 0
  if (moviesArray.length === 0) {
    return 0;
  }

  // Extract an array of movie scores
  const movieScores = moviesArray.map(movie => {
    return movie.score;
  });

  // Calculate the sum of scores
  const sumOfScores = movieScores.reduce((acc, cur) => {
    return acc + (cur || 0);
  }, 0);

  // Calculate the average and round it to 2 decimal places
  const average = sumOfScores / moviesArray.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  // Filter moviesArray for 'Drama' genre
  const dramaMovies = moviesArray.filter(movie => {
    return movie.genre.includes('Drama');
  });

  // Return the average score of drama movies
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  // Create a shallow copy of moviesArray
  const copyMoviesArray = [...moviesArray];

  // Sort the movies based on year, and if the years are the same, sort by title
  const orderedMovies = copyMoviesArray.sort((a, b) =>
    a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year
  );

  // Return the ordered movies
  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  // Extract an array of movie titles and sort them alphabetically
  const orderedTitles = moviesArray.map(movie => movie.title).sort();

  // Return the first 20 titles if there are more, or the entire list if there are 20 or fewer
  return orderedTitles.length <= 20
    ? orderedTitles
    : orderedTitles.slice(0, 20);
}

// function orderAlphabetically(moviesArray) {
//   const movieTitles = moviesArray.map(movie => movie.title);
//   const copyMovieTitles = [...movieTitles];
//   const orderedTitles = copyMovieTitles.sort();
//   return orderedTitles.length <= 20
//     ? orderedTitles
//     : orderedTitles.slice(0, 20);
// }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
