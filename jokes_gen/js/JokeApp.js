import { jokes } from './jokes.js';
import { FavoritesManager } from './FavoritesManager.js';

export class JokeApp {
  constructor({ jokeDiv, generateBtn, addFavoriteBtn, favoritesList }) {
    this.jokeDiv = jokeDiv;
    this.generateBtn = generateBtn;
    this.addFavoriteBtn = addFavoriteBtn;
    this.favoritesList = favoritesList;
    this.currentJoke = '';
    this.favoritesManager = new FavoritesManager(favoritesList);
  }

  init() {
    this.generateBtn.addEventListener('click', () => this.generateJoke());
    this.addFavoriteBtn.addEventListener('click', () => this.addToFavorites());
  }

  generateJoke() {
    if (jokes.length === 0) return;

    let index = Math.floor(Math.random() * jokes.length);

    // избегаем повтора
    if (jokes[index] === this.currentJoke && jokes.length > 1) {
      index = (index + 1) % jokes.length;
    }

    this.currentJoke = jokes[index];
    this.jokeDiv.textContent = this.currentJoke;

    const isFavorite = this.favoritesManager.isFavorite(this.currentJoke);
    this.jokeDiv.style.color = isFavorite ? 'goldenrod' : 'black';
  }

  addToFavorites() {
    if (!this.currentJoke) return;

    if (this.favoritesManager.isFavorite(this.currentJoke)) {
      console.log('Этот анекдот уже в избранном!');
      return;
    }

    this.favoritesManager.add(this.currentJoke);
  }
}
