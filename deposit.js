document.getElementById('deposit-btn').addEventListener('click', function(){
    // please deposit
    const depositField = document.getElementById('deposit-field');
    const nweDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(nweDepositAmountString);

    // clear the deposit field
    depositField.value = '';

    // alert deposit value 
    if(isNaN(newDepositAmount)){
        alert('please provide a valid number');
        return;
    }
    
    // total deposit amount
    const totalDepositElement = document.getElementById('total-deposit');
    const previousTotalDepositString = totalDepositElement.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString);

    // deposit sum previous + new
    const currentDepositAmount = previousTotalDeposit + newDepositAmount;
    totalDepositElement.innerText = currentDepositAmount;

    // balance total amount
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    // balance total sum
    const currentTotalBalance = balanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentTotalBalance
});