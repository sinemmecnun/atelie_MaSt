import { expand, expandNew } from "./catalogueItems.js";

const sizeButton = document.getElementById('size-button');
const priceBtn = document.getElementById('price-button');
const orderButton = document.getElementById('show-order');
const rentButton = document.getElementById('show-rent');
const sendOrder = document.getElementById('send-order');
const sendRent = document.getElementById('send-rent');

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
    expandNew(orderDiv);
});

rentButton.addEventListener('click', () =>{
    expandNew(rentDiv);
});

sendOrder.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('order-name').value;
    const phone = document.getElementById('order-phone').value;
    const email = document.getElementById('order-email').value;
    const message = document.getElementById('order-message').value;
    
    if(name == '' || phone == '' || email == '' || message == ''){
        return alert('Всички полета са задължителни!');
    }

    const parent = sendOrder.parentElement.parentElement;
    document.getElementById('order-message-sent').style.display = 'flex';
    parent.style.display = 'none';
})

sendRent.addEventListener('click', (event) => {
    const name = document.getElementById('rent-name').value;
    const phone = document.getElementById('rent-phone').value;
    const email = document.getElementById('rent-email').value;
    const message = document.getElementById('rent-message').value;
    
    if(name == '' || phone == '' || email == '' || message == ''){
        return alert('Всички полета са задължителни!');
    }    
    // location.reload();
    const parent = sendRent.parentElement.parentElement;
    document.getElementById('rent-message-sent').style.display = 'flex';
    parent.style.display = 'none';
})