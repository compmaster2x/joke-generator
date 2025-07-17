export function initFavorites(addFavoriteBtn, favoritesList, getCurrentJoke) {
  addFavoriteBtn.addEventListener('click', () => {
    const currentJoke = getCurrentJoke();
    if (!currentJoke) return;

    if (isInFavorites(currentJoke, favoritesList)) {
      console.log('Этот анекдот уже в избранном!');
      return;
    }

    const item = document.createElement('div');
    item.className = 'favorite-item';
    item.textContent = currentJoke;

    item.addEventListener('click', () => item.remove());

    favoritesList.appendChild(item);
  });
}

export function isInFavorites(joke, favoritesList) {
  return Array.from(favoritesList.children).some(
    item => item.textContent === joke
  );
}
