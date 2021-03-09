// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity;
  const subtotalContainer = product.querySelector('.subtotal span');
  subtotalContainer.innerHTML = subtotalPrice.toFixed(2);
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  

  let newSubtotal = 0;
  document.querySelectorAll('.product').forEach(product => newSubtotal += updateSubtotal(product));



  // ITERATION 3
  document.querySelector('#total-value span').innerText = newSubtotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const parentProduct = target.parentNode.parentNode;
  parentProduct.parentNode.removeChild(parentProduct);
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn.btn-remove')
  removeButtons.forEach(removeButton => removeButton.addEventListener('click', removeProduct));
});
