import { expand, populateDetails, renderCatalogueItems } from "./catalogueItems.js";

window.onload = renderCatalogueItems();

const body = document.querySelector('body');
const detailsDiv = document.getElementById('item-details');
const detailsButtons = document.querySelectorAll('.details-button');

document.getElementById('ex-pjs').addEventListener('click', () => {
    const div = document.getElementById('pajamas-div');
    expand(div);
});

document.getElementById('ex-undwear').addEventListener('click', () => {
    const div = document.getElementById('underwear-div');
    expand(div);
})

document.getElementById('ex-dress').addEventListener('click', () => {
    const div = document.getElementById('dress-div');
    expand(div);
})

document.getElementById('ex-costume').addEventListener('click', () => {
    const div = document.getElementById('costumes-div');
    expand(div);
})

detailsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        detailsDiv.style.display = 'block';
        body.classList.add('stop-scrolling');

        const buttonData = button.id.split(" ");
        const id = buttonData[1];
        const type = buttonData[0];

        populateDetails(id, type);
    })
})

document.getElementById('close-button').addEventListener('click', () => {
    detailsDiv.style.display = 'none';
    body.classList.remove('stop-scrolling');
});
