export function IsFavourite(imdbID) {
  try {
    const favouriteslocalStorageArray = localStorage.getItem('favouriteMovies');
    const isFavourite = favouriteslocalStorageArray.includes(imdbID);
    return isFavourite;
  }
  catch (e) {
    return null;
  }
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
  let isFavourite = IsFavourite(imdbID);
  isFavourite ? RemoveFromStorage(imdbID) : AddToStorage(imdbID)
}