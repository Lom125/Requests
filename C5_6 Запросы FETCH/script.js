

const divOut = document.querySelector('.output');

const butt = document.querySelector('.but-style');

butt.addEventListener('click', async () => {
  const valueWidth = document.querySelector('.inp-width').value;
  const valueHeight = document.querySelector('.inp-height').value;
  // console.log(valueWidth, valueHeight)
  if (valValid(valueWidth) && valValid(valueHeight)) { await useRequest(`https://picsum.photos/${Number(valueWidth)}/${Number(valueHeight)}`) }
  else {divOut.innerHTML = 'Одно из чисел вне диапазона от 100 до 300'}
});


function valValid(value) {
  const intVal = +value;
  const intType = typeof intVal;
  let result = false;
  if(intType === 'number' && !isNaN(intVal)) {
      if (intVal < 301 && intVal > 99) result = true
  }
  return result
}

function useRequest(url) {
  fetch(url)
  .then((response) => {
    // path = response.url;
    // console.log(path);
    displayResult(response.url);
  })
  .catch(()=> {console.log('Error')});
};


function displayResult(path) {
  // console.log(path);
  let card = `
      <div class="card">
        <img
          src=${path}
          class="card-image"
        />
      </div>
    `;
  divOut.innerHTML = card;
}
