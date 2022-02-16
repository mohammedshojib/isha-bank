document
  .getElementById("calculateIncome")
  .addEventListener("click", function () {
    const income = parseInt(document.getElementById("income").value);
    const balance = document.getElementById("balance");
    const expenses = document.getElementById("expenses");
    const food = parseInt(document.getElementById("food").value);
    const rent = parseInt(document.getElementById("rent").value);
    const clothes = parseInt(document.getElementById("clothes").value);

    expenses.innerText = food + rent + clothes;
    balance.innerText = income - expenses.innerText;
  });

document.getElementById("saveBtn").addEventListener("click", function () {
  const saveAmount = parseInt(document.getElementById("savingAmount").value);
  const savings = document.getElementById("savings");
  const income = parseInt(document.getElementById("income").value);
  const balance = document.getElementById("balance");
  const remainingBalance = document.getElementById("remainingBalance");

  savings.innerText = income / saveAmount;
  remainingBalance.innerText = balance.innerText - savings.innerText;
});
