import { JokeApp } from './js/JokeApp.js';

const app = new JokeApp({
  jokeDiv: document.getElementById('joke'),
  generateBtn: document.getElementById('generateBtn'),
  addFavoriteBtn: document.getElementById('addFavoriteBtn'),
  favoritesList: document.getElementById('favoritesList')
});

app.init();
