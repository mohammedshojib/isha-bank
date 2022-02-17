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
    if (expenses.innerText > income) {
      alert("Please input your correct income");
      balance.innerText = "Plz input correct icome";
    } else if (
      income == "" ||
      income < 0 ||
      food == "" ||
      food < 0 ||
      rent == "" ||
      rent < 0 ||
      clothes == "" ||
      clothes < 0
    ) {
      alert("Please input your correct informationd.");
    }
  });

document.getElementById("saveBtn").addEventListener("click", function () {
  const saveAmount = parseInt(document.getElementById("savingAmount").value);
  const savings = document.getElementById("savings");
  const income = parseInt(document.getElementById("income").value);
  const balance = document.getElementById("balance");
  const remainingBalance = document.getElementById("remainingBalance");

  savings.innerText = saveAmount * (income / 100);
  remainingBalance.innerText = balance.innerText - savings.innerText;

  // if (remainingBalance.innerText < 0) {
  //   alert("Please input your correct saving informationd.");
  //   remainingBalance.innerText =
  //     "Please input your correct saving informationd.";
  // }
});
