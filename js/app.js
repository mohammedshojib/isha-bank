/* ============= Common Function ============= */
function updateFields(itemId) {
  const inputText = document.getElementById(itemId);
  let inputTextValue = parseFloat(inputText.value);
  return inputTextValue;
}

function subtract(num1, num2) {
  return num1 - num2;
}
/* ============= start area ============= */
document
  .getElementById("calculateIncome")
  .addEventListener("click", function () {
    const balance = document.getElementById("balance");
    const incomeValue = updateFields("income");
    const foodValue = updateFields("food");
    const rentValue = updateFields("rent");
    const clothesValue = updateFields("clothes");

    const expenses = document.getElementById("expenses");

    expenses.innerText = foodValue + rentValue + clothesValue;
    // balance.innerText = incomeValue - expenses.innerText; /*====== menual ======*/
    balance.innerText = subtract(incomeValue, expenses.innerText);
    /* ============= Error Hanling ============= */
    if (expenses.innerText > incomeValue) {
      alert("Please input your correct income / Expenses");
      balance.innerText = "Plz input correct icome";
    } else if (
      incomeValue == "" ||
      isNaN(incomeValue) ||
      incomeValue <= 0 ||
      foodValue == "" ||
      isNaN(foodValue) ||
      foodValue < 0 ||
      rentValue == "" ||
      isNaN(rentValue) ||
      rentValue < 0 ||
      isNaN(clothesValue) ||
      clothesValue == "" ||
      clothesValue < 0
    ) {
      alert("Please input your correct informationd.");
      balance.innerText = "Plz input correct value";
    }
  });
/* ============= saving area ============= */

document.getElementById("saveBtn").addEventListener("click", function () {
  const savings = document.getElementById("savings");
  const balance = document.getElementById("balance");
  const remainingBalance = document.getElementById("remainingBalance");

  const saveAmount = updateFields("savingAmount");
  const incomeValue = updateFields("income");
  savings.innerText = saveAmount * (incomeValue / 100);
  // remainingBalance.innerText = balance.innerText - savings.innerText; /*== manual ==*/
  remainingBalance.innerText = subtract(balance.innerText, savings.innerText);

  /* ============= Error Hanling ============= */

  if (remainingBalance.innerText < 0) {
    alert("Please input your correct savings informationd.");
    remainingBalance.innerText =
      "Please input your correct savings informationd.";
  } else if (saveAmount == "" || isNaN(saveAmount) || saveAmount <= 0) {
    alert("Please input your correct savings informationd.");
  }
});
