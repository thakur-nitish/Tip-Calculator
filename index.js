function calculateTip() {
  var billAmount = document.getElementById('bill-amount').value;
  var tipPercentage = document.getElementById("tip-percentage").value;
  var splitPeople = document.getElementById("split-people").value;
  //calculate tip and total bill amount;
  var tipAmount = billAmount * (tipPercentage / 100);
  var totalBill = parseFloat(billAmount) + parseFloat(tipAmount)

  //calculate amount per person
  var amountPerPerson = totalBill / splitPeople;


  //Display results 
  document.getElementById("tip-amount").innerHTML = "$" + tipAmount.toFixed(2);

  document.getElementById("total-bill").innerHTML = "$" + totalBill.toFixed(2);
  document.getElementById("amount-per").innerHTML = "$" + amountPerPerson.toFixed(2);

}