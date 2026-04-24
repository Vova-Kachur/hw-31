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
