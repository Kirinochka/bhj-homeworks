const items = document.querySelector('#items');
const loader = document.querySelector('#loader')

function addItem(code, value) {
  const item = document.createElement('div');
  item.classList.add('item');
  item.innerHTML = `
    <div class="item__code">
        ${code}
    </div>
    <div class="item__value">
        ${value}
    </div>
    <div class="item__currency">
        руб.
    </div>
  `;
  items.append(item);
}

fetch('https://netology-slow-rest.herokuapp.com')
  .then(res => res.json())
  .then(({response}) => {
    const valutes = response.Valute;

    for (const {CharCode, Value} of Object.values(valutes)) {
      loader.remove();
      addItem(CharCode, Value);
    }
  })
