const cart = document.querySelector('.cart__products');
const controls = document.querySelectorAll('.product__quantity-controls');
const addBtns = document.querySelectorAll('.product__add');

function createProduct(id, src, count) {
  const product = document.createElement('div');
  const img = document.createElement('img');
  const productCount = document.createElement('div');

  product.classList.add('cart__product');
  img.classList.add('cart__product-image');
  productCount.classList.add('cart__product-count');

  product.dataset.id = id;
  img.src = src;
  productCount.textContent = count;
  product.append(img, productCount)
  cart.append(product);
}

function changeCount({target}) {
  if (!target.classList.contains('product__quantity-control')) return;
  const count = target.closest('.product__quantity-controls')
    .querySelector('.product__quantity-value');
  if (target.classList.contains('product__quantity-control_dec')) {
    count.textContent <= 0 ? count.textContent = '0' :
      count.textContent = `${Number(count.textContent) - 1}`;
  } else if (target.classList.contains('product__quantity-control_inc')) {
    count.textContent = `${Number(count.textContent) + 1}`;
  }
}

function addToCart({target}) {
  if (!target.classList.contains('product__add')) return;
  const product = target.closest('.product');
  const src = product.querySelector('.product__image').src;
  const count = product.querySelector('.product__quantity-value').textContent;
  const id = product.dataset.id;
  const productInCart = cart.querySelector(`[data-id = '${id}']`);
  if (productInCart) {
    const productCount = productInCart.querySelector('.cart__product-count');
    productCount.textContent = `${Number(productCount.textContent) + Number(count)}`;
  } else {
    count > 0 ? createProduct(id, src, count) : '';
  }
}

controls.forEach(control => control.addEventListener('click', changeCount));
addBtns.forEach(btn => btn.addEventListener('click', addToCart));