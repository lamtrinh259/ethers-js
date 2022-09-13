// set up movie night

// Movie will only be started after popcorn is cooked and drinks are poured
async function setupMovieNight() {
  await cookPopcorn();
  await pourDrinks();
  startMovie();
}

function cookPopcorn() {
  // some code here
  return Promise(/* Some code */);
}
