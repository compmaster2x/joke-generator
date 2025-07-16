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
  if (jokes.length === 0) return;

  let randomIndex = Math.floor(Math.random() * jokes.length);

  // Если выпала та же шутка — сдвинем индекс на +1 (с переходом через край)
  if (jokes[randomIndex] === currentJoke && jokes.length > 1) {
    randomIndex = (randomIndex + 1) % jokes.length;
  }

  currentJoke = jokes[randomIndex];
  jokeDiv.textContent = currentJoke;

  const exists = Array.from(favoritesList.children).some(
    item => item.textContent === currentJoke
  );

  jokeDiv.style.color = exists ? 'goldenrod' : 'black';
});


addFavoriteBtn.addEventListener('click', () => {
  if (currentJoke) {
    // Проверка: ищем, есть ли уже такой анекдот в списке
    const existingItems = favoritesList.querySelectorAll('.favorite-item');
    const alreadyExists = Array.from(existingItems).some(item => item.textContent === currentJoke);

    if (alreadyExists) {
      // Можно всплывающее сообщение, мигание, или просто ничего не делать
      console.log('Этот анекдот уже в избранном!');
      return;
    }

    // Если нет — добавляем
    const item = document.createElement('div');
    item.className = 'favorite-item';
    item.textContent = currentJoke;

    // Удаление по клику
    item.addEventListener('click', () => {
      item.remove();
    });

    favoritesList.appendChild(item);
  }
});

