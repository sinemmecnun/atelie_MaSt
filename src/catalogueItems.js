window.onload = renderCatalogueItems();

import { dbData } from "./lib.js";

async function renderCatalogueItems(){
    try {
        //clear main
        const mainDiv = document.querySelector('main');
        mainDiv.innerHTML = "";
        console.log(dbData)
        
    } catch (error) {
        
    }
}