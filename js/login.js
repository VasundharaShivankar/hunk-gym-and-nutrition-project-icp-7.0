function validateForm(event) {
    
    const firstNameInput =document.getElementById('first');
    const firstName= firstNameInput.value.trim();
    if (!firstName) {
        alert("Please fill out the First Name field.");
        event.preventDefault();
    }

    const lastNameInput = document.getElementById('last');
    const lastName = lastNameInput.value.trim();
    if (!lastName) {
        alert("Please fill out the Last Name field.");
        event.preventDefault();
    }

    const emailInput = document.getElementById('email');
    const emailName = emailInput.value.trim();
    if (!emailName) {
    alert("Please fill out the email");
    event.preventDefault();
    }
    
    const phoneNumberInput =document.getElementById('phone');
    const phoneNumber= phoneNumberInput.value.trim();
    if (phoneNumber.length!== 10) {
        alert("Please fill out the 10 digits for phone number");
        event.preventDefault();
    }
    }



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
