const sizeButton = document.getElementById('size-button');
sizeButton.addEventListener('click', () => {
    const div = document.getElementById('womens-sizes-div');
    if(div.style.display == 'none'){
        div.style.display = 'block';
    }
    else{
        div.style.display = 'none';
    }
});

const priceBtn = document.getElementById('price-button');
priceBtn.addEventListener('click', () => {
    const div = document.getElementById('price-list');
    if(div.style.display == 'none'){
        div.style.display = 'block';
    }
    else{
        div.style.display = 'none';
    }
})