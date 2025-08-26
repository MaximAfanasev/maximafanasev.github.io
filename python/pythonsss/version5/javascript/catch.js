const canvas2 = document.getElementById("gameCanvas2");
const ctx2 = canvas2.getContext("2d");

const basketWidth = 80;
const basketHeight = 20;
const objectSize = 30;

let basketX = canvas2.width / 2 - basketWidth / 2;
let objectX = Math.random() * (canvas2.width - objectSize);
let objectY = 0;
let fallingSpeed = 2; // Начальная скорость падения объекта

function drawBasket() {
  ctx2.fillStyle = "blue";
  ctx2.fillRect(basketX, canvas.height - basketHeight, basketWidth, basketHeight);
}

function drawFallingObject() {
  ctx2.fillStyle = "red";
  ctx2.fillRect(objectX, objectY, objectSize, objectSize);
}

function resetFallingObject() {
  objectX = Math.random() * (canvas.width - objectSize);
  objectY = 0;
}

function updateBasketPosition() {
  // Платформа движется в сторону падающего объекта
  if (basketX < objectX) {
    basketX += 2; // Движение вправо
  } else if (basketX + basketWidth > objectX) {
    basketX -= 2; // Движение влево
  }
}

function update() {
  ctx2.clearRect(0, 0, canvas.width, canvas.height);

  updateBasketPosition(); // Обновляем позицию платформы
  drawBasket();
  drawFallingObject();

  objectY += fallingSpeed; // Скорость падения объекта

  if (objectY + objectSize > canvas.height) {
    resetFallingObject(); // Сбросить объект, если он упал
  }

  // Проверка на ловлю объекта
  if (
    objectY + objectSize > canvas.height - basketHeight &&
    objectY + objectSize < canvas.height &&
    objectX + objectSize > basketX &&
    objectX < basketX + basketWidth
  ) {
    resetFallingObject(); // Сбросить объект, если он пойман
  }

  // Отображение счета
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";

  requestAnimationFrame(update);
}

// Начать игру
update();
