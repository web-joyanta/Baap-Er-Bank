// Withdraw buttons
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // New Withdraw add
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // clear the withdraw field
    withdrawField.value = '';

    // alert withdrawField value 
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }
    
    // withdraw balance add
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // new Current total amount
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // withdraw alerts add
    if(newWithdrawAmount > previousBalanceTotal){
        alert('please provide is check amount');
        return;
    }

    // total withdraw amount add and sum
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // current withdraw balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
});