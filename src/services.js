import { expand } from "./catalogueItems.js";

const sizeButton = document.getElementById('size-button');
const priceBtn = document.getElementById('price-button');
const orderButton = document.getElementById('show-order');
const rentButton = document.getElementById('show-rent');
const questionButtons = document.querySelectorAll('.send-question');

const sizeDiv = document.getElementById('womens-sizes-div');
const priceDiv = document.getElementById('price-list');
const orderDiv = document.getElementById('order-ask');
const rentDiv = document.getElementById('rent-ask');

sizeButton.addEventListener('click', () => {
    expand(sizeDiv);
});

priceBtn.addEventListener('click', () => {
    expand(priceDiv);
});

orderButton.addEventListener('click', () =>{
    expand(orderDiv);
});

rentButton.addEventListener('click', () =>{
    expand(rentDiv);
});


