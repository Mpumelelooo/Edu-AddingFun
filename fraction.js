const pizza = document.getElementById('pizza');

const fractionDisplay = document.getElementById('fractionDisplay');

const feedbackElement = document.getElementById('feedback');

const toppings = ['pepperoni', 'cheese', 'olives', 'mushrooms'];

let pizzaSlices = [];

let currentFraction = '';



function createPizzaSlices(parts) {

  pizza.innerHTML = '';

  pizzaSlices = [];



  for (let i = 0; i < parts; i++) {

    const slice = document.createElement('div');

    slice.classList.add('slice');

    slice.style.transform = `rotate(${(360 / parts) * i}deg)`;

    pizza.appendChild(slice);

    pizzaSlices.push(slice);



    // Add toppings to the slices

    toppings.forEach(topping => {

      const toppingDiv = document.createElement('div');

      toppingDiv.classList.add('topping');

      toppingDiv.setAttribute('data-topping', topping);

      slice.appendChild(toppingDiv);

    });

  }

}



function setFraction(fraction) {

  currentFraction = fraction;

  fractionDisplay.innerText = `Add toppings to: ${fraction}`;

  feedbackElement.innerText = '';



  if (fraction === '1/2') {

    createPizzaSlices(2);

  } else if (fraction === '1/4') {

    createPizzaSlices(4);

  } else if (fraction === '1/8') {

    createPizzaSlices(8);

  }

}



pizza.addEventListener('click', function (event) {

  const slice = event.target;

  if (slice.classList.contains('slice')) {

    const toppingDiv = slice.querySelector('.topping');

    if (toppingDiv) {

      toppingDiv.style.display = 'block';

      feedbackElement.innerText = `Topping added to ${currentFraction} of the pizza!`;

    }

  }

});



// Set a random fraction task for the player

setFraction('1/2');
