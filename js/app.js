document
  .getElementById("calculateIncome")
  .addEventListener("click", function () {
    const income = document.getElementById("income");
    const balance = document.getElementById("balance");
    const expenses = document.getElementById("expenses");
    const food = document.getElementById("food");
    const rent = document.getElementById("rent");
    const clothes = document.getElementById("clothes");

    const incomeValue = parseFloat(income.value);
    const foodValue = parseFloat(food.value);
    const rentValue = parseFloat(rent.value);
    const clothesValue = parseFloat(clothes.value);

    expenses.innerText = foodValue + rentValue + clothesValue;
    balance.innerText = incomeValue - expenses.innerText;
    if (expenses.innerText > incomeValue) {
      alert("Please input your correct income / Expenses");
      balance.innerText = "Plz input correct icome";
    } else if (
      income.value == "" ||
      income.value == String ||
      income.value <= 0 ||
      food.value == "" ||
      food.value == String ||
      food.value < 0 ||
      rent.value == "" ||
      rent.value == String ||
      rent.value < 0 ||
      clothes.value == String ||
      clothes.value == "" ||
      clothes.value < 0
    ) {
      alert("Please input your correct informationd.");
    }
  });
/* ----------savings area------ */

document.getElementById("saveBtn").addEventListener("click", function () {
  const save = document.getElementById("savingAmount");
  const savings = document.getElementById("savings");
  const income = document.getElementById("income");
  const balance = document.getElementById("balance");
  const remainingBalance = document.getElementById("remainingBalance");

  const saveAmount = parseFloat(save.value);
  const incomeValue = parseInt(income.value);
  savings.innerText = saveAmount * (incomeValue / 100);
  remainingBalance.innerText = balance.innerText - savings.innerText;

  if (remainingBalance.innerText < 0) {
    alert("Please input your correct saving informationd.");
    remainingBalance.innerText =
      "Please input your correct saving informationd.";
  } else if (save.value == "" || save.value == String || save.value < 0) {
    alert("Please input your correct saving informationd.");
  }
});
