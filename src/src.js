import { renderCatalogueItems } from "./catalogueItems.js";

window.onload = renderCatalogueItems();

document.getElementById('ex-pjs').addEventListener('click', () => {
    const div = document.getElementById('pajamas-div');
    expandCatalogue(div);
});

document.getElementById('ex-undwear').addEventListener('click', () => {
    const div = document.getElementById('underwear-div');
    expandCatalogue(div);
})

document.getElementById('ex-dress').addEventListener('click', () => {
    const div = document.getElementById('dress-div');
    expandCatalogue(div);
})

document.getElementById('ex-costume').addEventListener('click', () => {
    const div = document.getElementById('costumes-div');
    expandCatalogue(div);
})

const detailsButtons = document.querySelectorAll('.details-button');
detailsButtons.forEach((button) => {
    const detailsDiv = document.getElementById('item-details');
    button.addEventListener('click', () => {
        detailsDiv.style.display = 'block';})
})

document.getElementById('close-button').addEventListener('click', () => {
    const detailsDiv = document.getElementById('item-details');
    detailsDiv.style.display = 'none';
})

function expandCatalogue(div){
    if(div.style.display === 'none'){
        div.style.display = 'grid';
    }
    else{
        div.style.display = 'none';
    }
}