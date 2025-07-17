import { initGenerator } from './js/generator.js';
import { initFavorites } from './js/favorites.js';
import { getCurrentJoke } from './js/generator.js';

const jokeDiv = document.getElementById('joke');
const generateBtn = document.getElementById('generateBtn');
const addFavoriteBtn = document.getElementById('addFavoriteBtn');
const favoritesList = document.getElementById('favoritesList');

initGenerator(jokeDiv, generateBtn, favoritesList);
initFavorites(addFavoriteBtn, favoritesList, getCurrentJoke);
