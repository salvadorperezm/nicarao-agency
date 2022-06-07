const discountButton = document.querySelector("#discountButton");

discountButton.addEventListener("click", function() {
    let retailPrice = document.querySelector("#retailPrice").value;
    let discountPercentage = document.querySelector("#discountPercentage").value;
    priceWithDiscount(retailPrice, discountPercentage);
});

function priceWithDiscount(retailPrice, discountPercentage) {
    if (retailPrice === "" || discountPercentage === "") {
        alert("Por favor,verifica tus numeros");
    } else {
        let totalPercentageWithDiscount = 100 - discountPercentage;
        let totalWithDiscount = (retailPrice * totalPercentageWithDiscount) / 100;
        const discountText = document.querySelector(".discountText");
        discountText.textContent = `El total con descuento es: c$${totalWithDiscount}`;
    }
}