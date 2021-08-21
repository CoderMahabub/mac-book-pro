//Function To Get Total Price
function getTotalPrice(product, bestPriceTotal, memoryCostTotal, storageCostTotal, deliveryCostTotal) {
    const totalPrice = document.getElementById(product);
    let totalPriceValue = totalPrice.innerText;
    totalPriceValue = bestPriceTotal + memoryCostTotal + storageCostTotal + deliveryCostTotal;
    totalPrice.innerText = totalPriceValue;
};

//Function to Minimize Calculationo for each button click to one function
function calculateTotal() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceTotal = parseFloat(bestPrice.innerText);

    const memoryCost = document.getElementById('memory-cost');
    const memoryCostTotal = parseFloat(memoryCost.innerText);

    const storageCost = document.getElementById('storage-cost');
    const storageCostTotal = parseFloat(storageCost.innerText);

    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostTotal = parseFloat(deliveryCost.innerText);

    //get total Price for both fields
    getTotalPrice('total-price', bestPriceTotal, memoryCostTotal, storageCostTotal, deliveryCostTotal);
    getTotalPrice('final-total', bestPriceTotal, memoryCostTotal, storageCostTotal, deliveryCostTotal);
};

//Function To Minimize Zero Cost Items
function getZeroCost(product) {
    const productCost = document.getElementById(product + '-cost');
    productCost.innerText = 0;
    calculateTotal();
};

//Function To Minimize 180 Cost Items
function getOneEightyCost(product) {
    const productCost = document.getElementById(product + '-cost');
    productCost.innerText = 180;
    calculateTotal();
};

//click Handler for memory-8gb
document.getElementById('memory-8gb').addEventListener('click', function () {
    getZeroCost('memory');
});

//click Handler for memory-16gb
document.getElementById('memory-16gb').addEventListener('click', function () {
    getOneEightyCost('memory');
});

//Click Handler for storage-256gb
document.getElementById('storage-256gb').addEventListener('click', function () {
    getZeroCost('storage');
});

//Click Handler for storage-256gb
document.getElementById('storage-512gb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
    calculateTotal();
});

//Click Handler for storage-1tb
document.getElementById('storage-1tb').addEventListener('click', function () {
    getOneEightyCost('storage');
});

//Click Handler for Delivery Charge
document.getElementById('free-delivery').addEventListener('click', function () {
    getZeroCost('delivery');
});

//Click Handler for Delivery Charge
document.getElementById('premium-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 20;
    calculateTotal();
});

//Promo Code Apply
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const promoInputValue = promoInput.value;

    const totalPrice = document.getElementById('total-price');
    const totalPriceValue = parseFloat(totalPrice.innerText);

    const finalPrice = document.getElementById('final-total');
    const finalTotalValue = parseFloat(finalPrice.innerText);
    console.log(finalTotalValue);

    //Promo Code = "stevekaku" for 20% discount
    if (promoInputValue.toLowerCase() == 'stevekaku') {
        const totalAfterDiscount = (totalPriceValue / 100) * 80;
        finalPrice.innerText = totalAfterDiscount;

        //To show round figure after 20% discount
        finalPrice.innerText = Math.round(totalAfterDiscount);
        promoInput.value = '';
    } else {
        alert("Promo Code Doesn't Match");
        promoInput.value = '';
    }
});