export class FavoritesManager {
  constructor(favoritesList) {
    this.favoritesList = favoritesList;
  }

  isFavorite(joke) {
    return Array.from(this.favoritesList.children).some(
      item => item.textContent === joke
    );
  }

  add(joke) {
    const item = document.createElement('div');
    item.className = 'favorite-item';
    item.textContent = joke;

    item.addEventListener('click', () => item.remove());
    this.favoritesList.appendChild(item);
  }
}
