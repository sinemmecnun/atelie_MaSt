import { dbData } from "./productData.js";


export function renderCatalogueItems(){
    const belyo = Object.keys(dbData.belyo);
    const pijami = Object.keys(dbData.pijami);
    const rokli = Object.keys(dbData.rokli);
    const kostyumi = Object.keys(dbData.kostyumi);
    
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

export function populateDetails(id, type){
    const data = dbData[type];
    const itemDetails = data[id];
    const itemDetailsDiv = document.getElementById('details-container');
    const detailText = {
        "belyo": `
            <p><b>Име:</b> ${itemDetails.name}</p>
            <p><b>Цвят:</b> ${itemDetails.color}</p>
            <p><b>Цена:</b> ${itemDetails.price} лв.</p>`,
        "pijami": `
            <p><b>Име:</b> ${itemDetails.name}</p>
            <p><b>Материал:</b> ${itemDetails.material}</p>
            <p><b>Цвят:</b> ${itemDetails.color}</p>
            <p><b>Цена:</b> ${itemDetails.price} лв.</p>`,
        "rokli": `
            <p><b>Име:</b> ${itemDetails.name}</p>
            <p><b>Цена:</b> ${itemDetails.price} лв.</p>`, 
        "kostyumi": `
            <p><b>Име:</b> ${itemDetails.name}</p>
            <p>Подходящо за <b>${itemDetails.years}</b> годишни</p>`
    }

    itemDetailsDiv.innerHTML = `
        <div id="detail-pic-div">
            <img id="details-pic" src=${itemDetails.imageUrl} alt="">
        </div>
        <div id="details-text">
            ${detailText[type]}
        </div>`
}

export function expand(div){
    if(div.style.display == 'none'){
        div.style.display = 'block';
    }
    else{
        div.style.display = 'none';
    }
}

export function expandNew(div){
    if(div.style.display == 'none'){
        div.style.display = 'flex';
    }
    else{
        div.style.display = 'none';
    }
}