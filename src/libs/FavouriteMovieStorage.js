export function IsFavourite(imdbID) {
    if (imdbID === null) { imdbID = '' }
    let favouriteslocalStorageArray = localStorage.getItem('favouriteMovies');
    favouriteslocalStorageArray = favouriteslocalStorageArray ? favouriteslocalStorageArray.split(',') : [];
    const isFavourite = imdbID === '' ? false : favouriteslocalStorageArray.includes(imdbID);
    return isFavourite;
}

function RemoveFromStorage(imdbID) {
  let existing = localStorage.getItem('favouriteMovies');
  existing = existing ? existing.split(',') : [];
  existing = existing.filter(storedImdbID => storedImdbID !== imdbID);
  localStorage.setItem('favouriteMovies', existing.toString());;  
}

function AddToStorage(imdbID) {
  let existing = localStorage.getItem('favouriteMovies');
  existing = existing ? existing.split(',') : [];
  existing.push(imdbID);
  localStorage.setItem('favouriteMovies', existing.toString());
}

export function ToogleFavourite(imdbID) {
  const isFavourite = IsFavourite(imdbID);
  isFavourite ? RemoveFromStorage(imdbID) : AddToStorage(imdbID)
}