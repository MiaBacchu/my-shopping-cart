// input value increasing
function updateValue(isIncreasing, para, price) {
    const inputText = document.getElementById(para + '-input');
    const inputValue = parseFloat(inputText.value);
    if (isIncreasing == true) {
        inputText.value = inputValue + 1;
    }
    else if (inputValue > 0) {
        inputText.value = inputValue - 1;
    }
    const updateTotal = document.getElementById(para + '-total');
    updateTotal.innerText = inputText.value * price;
    calcTotal()
}
function getTotal(product) {
    const productTotalText = document.getElementById(product + '-input');
    const productTotal = parseFloat(productTotalText.value);
    return productTotal;
}
function calcTotal() {
    const phoneTotal = getTotal('phone') * 1219;
    const caseTotal = getTotal('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    document.getElementById('sub-total').innerText = subTotal;
    const taxTotal = document.getElementById('tax-total').innerText = subTotal / 10;
    document.getElementById('total').innerText = subTotal - taxTotal;

}
// input value decreasing
// calling phone plus button
document.getElementById('phone-plus').addEventListener('click', function () {
    updateValue(true, 'phone', 1219)
})
// calling phone minus button
document.getElementById('phone-minus').addEventListener('click', function () {
    updateValue(false, 'phone', 1219
    )
})
// calling case plus button
document.getElementById('case-plus').addEventListener('click', function () {
    updateValue(true, 'case', 59)
})
// calling case minus button
document.getElementById('case-minus').addEventListener('click', function () {
    updateValue(false, 'case', 59)
})