function inc() {
    const quantityText = document.getElementById('quan-txt');
    let quantity = parseInt(quantityText.innerText);
    quantityText.innerText = ++quantity;
}

function dec() {
    const quantityText = document.getElementById('quan-txt');
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 7) {
        quantityText.innerText = --quantity;
    } else {
        alert("You can't have less than 7 days");
    }
}
