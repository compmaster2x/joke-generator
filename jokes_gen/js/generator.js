import { jokes } from './jokes.js';
import { isInFavorites } from './favorites.js';

let currentJoke = '';

export function initGenerator(jokeDiv, generateBtn, favoritesList) {
  generateBtn.addEventListener('click', () => {
    if (jokes.length === 0) return;

    let randomIndex = Math.floor(Math.random() * jokes.length);

    if (jokes[randomIndex] === currentJoke && jokes.length > 1) {
      randomIndex = (randomIndex + 1) % jokes.length;
    }

    currentJoke = jokes[randomIndex];
    jokeDiv.textContent = currentJoke;

    const exists = isInFavorites(currentJoke, favoritesList);
    jokeDiv.style.color = exists ? 'goldenrod' : 'black';
  });
}

export function getCurrentJoke() {
  return currentJoke;
}
