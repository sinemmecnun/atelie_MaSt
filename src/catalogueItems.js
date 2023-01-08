import { dbData } from "./data.js";

const belyo = Object.keys(dbData.belyo);
const pijami = Object.keys(dbData.pijami);
const rokli = Object.keys(dbData.rokli);
const kostyumi = Object.keys(dbData.kostyumi);

export function renderCatalogueItems(){

    const underwearDiv = document.getElementById('underwear-div');
    const dressDiv = document.getElementById('dress-div');
    const pijamiDiv = document.getElementById('pajamas-div');
    const kostyumiDiv = document.getElementById('costumes-div');

    belyo.map((id) => {
        const data = dbData.belyo[id];
        populateTemplate(data, underwearDiv, id, 'belyo')
    })

    rokli.map((id) => {
        const data = dbData.rokli[id];
        populateTemplate(data, dressDiv, id, 'rokli');
    })

    pijami.map((id) => {
        const data = dbData.pijami[id];
        populateTemplate(data, pijamiDiv, id, 'pijami');
    })

    kostyumi.map((id) => {
        const data = dbData.kostyumi[id];
        populateTemplate(data, kostyumiDiv, id, 'kostyumi');
    })

    function populateTemplate(data, div, id, type){
        const imageUrl = data.imageUrl;

        const catalogueItem = document.createElement('div');
        catalogueItem.setAttribute('class', 'catalogue-item');
        catalogueItem.innerHTML = `
        <img src=${imageUrl} class="catalogue-pic" alt="">
        <button class="details-button" id="${type} ${id}">Детайли</button>`

        div.appendChild(catalogueItem);
    }

}

export function populateDetails(id, type, div){
    const data = dbData[type];
    const itemDetails = data[id];
    const itemDetailsDiv = document.getElementById('details-container');
    const detailText = {
        "belyo": `
            <p>Име: ${itemDetails.name}</p>
            <p>Цвят: ${itemDetails.color}</p>
            <p>Цена: ${itemDetails.price}</p>`,
        "pijami": `
            <p>Име: ${itemDetails.name}</p>
            <p>Материал: ${itemDetails.material}</p>
            <p>Цвят: ${itemDetails.color}</p>
            <p>Цена: ${itemDetails.price}</p>`,
        "rokli": `
            <p>Име: ${itemDetails.name}</p>
            <p>Цена: ${itemDetails.price}</p>`, 
        "kostyumi": `
            <p>Име: ${itemDetails.name}</p>
            <p>Подходящо за ${itemDetails.years} години</p>`
    }

    itemDetailsDiv.innerHTML = `
        <div>
            <img id="details-pic" src=${itemDetails.imageUrl} alt="">
        </div>
        <div id="details-text">
            ${detailText[type]}
        </div>`
}
