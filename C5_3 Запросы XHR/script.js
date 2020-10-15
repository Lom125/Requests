

const divOut = document.querySelector('.output');

const butt = document.querySelector('.but-style');

butt.addEventListener('click', funcProcessing);

function funcProcessing() {
  const value = document.querySelector('input').value;
  const intVal = +value;

  intType = typeof intVal;

  if(intType === 'number' && !isNaN(intVal)) {
      if (intVal < 1 || intVal > 10) divOut.innerHTML = 'Число вне диапазона от 1 до 10'
      else useRequest(`https://picsum.photos/v2/list?limit=${intVal}`, displayResult)
  }
  else divOut.innerHTML = 'Введено не число'
}

function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  // console.log('1 ');
  xhr.onload = function() {
    if (xhr.status != 200) console.log('Статус ответа: ', xhr.status)
    else {
      const result = JSON.parse(xhr.response);
      // console.log('2');
      if (callback) callback(result)
    		  }
  							           }
  xhr.onerror = function() {console.log('Ошибка! Статус ответа: ', xhr.status)};
  
  xhr.send();
};


function displayResult(data) {
  let cards = '';
  // console.log(data);
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
