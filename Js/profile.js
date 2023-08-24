const deposite = document.getElementById('deposite_value');
const withdow = document.getElementById('withdow_value');
const total_amount = document.getElementById('current_value');

// console.log(deposite);


// add money
const deposite_amount = document.getElementById('deposite');
const deposite_btn = document.getElementById('deposite_btn');

deposite_btn.addEventListener('click', function () {
    const previousAmountString = deposite.innerText;
    const previousAmount = parseFloat(previousAmountString);
    const addAmountString = deposite_amount.value;
    const addAmount = parseFloat(addAmountString);

    const total_deposite = previousAmount + addAmount;
    deposite.innerText = total_deposite;
    // add deposite section
    const total_amountString = total_amount.innerText;
    const finalAmount = addAmount + parseFloat(total_amountString);
    total_amount.innerText = finalAmount;
    // clear deposite input value
    deposite_amount.value = '';
})
// withdow money
const withdow_amount = document.getElementById('withdow');
const withdow_btn = document.getElementById('withdow_btn');

withdow_btn.addEventListener('click', function () {
    const previousAmountString = withdow.innerText;
    const previousAmount = parseFloat(previousAmountString);
    const reduceAmountString = withdow_amount.value;
    const reduceAmount = parseFloat(reduceAmountString);


    // reduce total amount
    const total_amountString = total_amount.innerText;
    const totalAmount = parseFloat(total_amountString);
    if (totalAmount >= reduceAmount) {
        const total_amountReduce = previousAmount + reduceAmount;
        withdow.innerText = total_amountReduce;
        const finalAmount = totalAmount - reduceAmount;
        total_amount.innerText = finalAmount;
        withdow_amount.value = '';
    }
    else {
        alert('Your current amount is not much.')
    }
})