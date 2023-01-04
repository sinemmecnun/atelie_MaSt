import { dbData } from "./data.js";

export function renderCatalogueItems(){
    const mainDiv = document.querySelector('main');
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
        populateTemplate(data, underwearDiv)
    })

    rokli.map((id) => {
        const data = dbData.rokli[id];
        populateTemplate(data, dressDiv);
    })

    pijami.map((id) => {
        const data = dbData.pijami[id];
        populateTemplate(data, pijamiDiv);
    })

    kostyumi.map((id) => {
        const data = dbData.kostyumi[id];
        populateTemplate(data, kostyumiDiv);
    })

    function populateTemplate(data, div){
        const imageUrl = data.imageUrl;

        const catalogueItem = document.createElement('div');
        catalogueItem.setAttribute('class', 'catalogue-item');
        catalogueItem.innerHTML = `
        <img src=${imageUrl} class="catalogue-pic" alt="">
        <button class="details-button">Детайли</button>`

        div.appendChild(catalogueItem);
    }

}