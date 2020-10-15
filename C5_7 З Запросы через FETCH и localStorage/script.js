

const divOut = document.querySelector('.output');

const butt = document.querySelector('.but-style');

loadLocalStorage();

butt.addEventListener('click', async () => {
  const valuePage = document.querySelector('.inp-page').value;
  const valueLimit = document.querySelector('.inp-limit').value;
  // console.log(valuePage, valueLimit);
  let valP = valValid(valuePage);
  let valL = valValid(valueLimit);
  // console.log(valP, valL);
  if (valP && valL) { await useRequest(`https://picsum.photos/v2/list?page=${+valuePage}&limit=${+valueLimit}`);}
  else if (!valP && valL) {divOut.innerHTML = 'Номер страницы вне диапазона от 1 до 10'}
  else if (valP && !valL) {divOut.innerHTML = 'Лимит вне диапазона от 1 до 10'}
  else {divOut.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'}
});


function loadLocalStorage() {
  let data = localStorage.getItem('data');
  if (data) {
  let data1 = JSON.parse(data);
  // console.log(data1);
  displayResult(data1);}
}

function valValid(value) {
  const intVal = +value;
  const intType = typeof intVal;
  let result = false;
  if(intType === 'number' && !isNaN(intVal)) {
      if (intVal < 11 && intVal > 0) result = true
  }
  return result
}

function useRequest(url) {
  fetch(url)
  .then( async (response) =>   {
    const result = await response.json();
    displayResult(result);
  })
  .catch(()=> {console.log('Error')});
};


function displayResult(data) {
  let cards = '';
  
  localStorage.clear();
  const strData = JSON.stringify(data);
  localStorage.setItem('data', strData);
  
  data.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });

  divOut.innerHTML = cards;
}

