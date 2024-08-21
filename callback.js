//////////// callback.js
console.log("///////// callback.js ///////////")
console.log("///////// callback.js ///////////")
console.log("///////// callback.js ///////////")
console.log("///////// callback.js ///////////")
console.log("///////// callback.js ///////////")


function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  console.log(`Здорово, скрипт ${script.src} загрузился`);
  console.log( _ ); // функция, объявленная в загруженном скрипте
});