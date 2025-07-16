const jokes = [
  "Встречаются два программиста. Один другому: «Ты знаешь, я свою жену в Git добавил… Теперь всегда могу откатить!»",
  "Программисты делятся на два типа: те, кто делает бэкап, и те, кто будет делать бэкап.",
  "Системный администратор не моет руки, он делает refresh.",
  "— Пап, а почему солнце всходит на востоке?\n— Работает, не трогай!",
  "Ошибка компиляции — это когда программа говорит тебе, где ты ошибся. Ошибка выполнения — это когда программа говорит тебе, что ты ошибся. А сегфолт — это когда программа молча уходит."
];

let currentJoke = '';

const jokeDiv = document.getElementById('joke');
const generateBtn = document.getElementById('generateBtn');
const addFavoriteBtn = document.getElementById('addFavoriteBtn');
const favoritesList = document.getElementById('favoritesList');

generateBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  currentJoke = jokes[randomIndex];
  jokeDiv.textContent = currentJoke;
});

addFavoriteBtn.addEventListener('click', () => {
  if (currentJoke) {
    const item = document.createElement('div');
    item.className = 'favorite-item';
    item.textContent = currentJoke;
    favoritesList.appendChild(item);
  }
});
