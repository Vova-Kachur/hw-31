//Завдання 1
// Функція з затримкою
function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Масив промісів
const promises = [
  delayedPromise("Перший", 2000),
  delayedPromise("Другий", 1000),
  delayedPromise("Третій", 3000),
  delayedPromise("Четвертий", 1500),
  delayedPromise("П'ятий", 2500),
];

// Виконуємо всі одразу
Promise.all(promises)
  .then((results) => {
    console.log("Всі результати:", results);
  })
  .catch((error) => {
    console.log("Помилка:", error);
  });


//Завдання 2
// Функція з випадковою затримкою
function randomDelay(value) {
  const delay = Math.floor(Math.random() * 4000) + 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Масив промісів
const racePromises = [
  randomDelay("A"),
  randomDelay("B"),
  randomDelay("C"),
  randomDelay("D"),
  randomDelay("E"),
];

// Хто швидше
Promise.race(racePromises)
  .then((result) => {
    console.log("Найшвидший результат:", result);
  })
  .catch((error) => {
    console.log("Помилка:", error);
  });
