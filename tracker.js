document.addEventListener("DOMContentLoaded", function () {
    var expenseForm = document.getElementById("expenseForm");
    var expenseTableBody = document.getElementById("expenseTableBody");
    expenseForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Get form values
        var amountInput = document.getElementById("amount");
        var amount = parseFloat(amountInput.value);
        var categoryInput = document.getElementById("category");
        var category = categoryInput.value;
        var dateInput = document.getElementById("date");
        var date = dateInput.value;
        // Add expense to table
        addExpense(amount, category, date);
        // Reset form fields
        expenseForm.reset();
    });
    function addExpense(amount, category, date) {
        var newRow = document.createElement("tr");
        newRow.innerHTML = "\n<td>".concat(amount.toFixed(2), "</td>\n<td>").concat(category, "</td>\n<td>").concat(date, "</td>\n            <td><button onclick=\"editExpense(this)\">Edit</button> <button onclick=\"deleteExpense(this)\">Delete</button></td>\n        ");
        expenseTableBody.appendChild(newRow);
    }
    function editExpense(button) {
        var row = button.closest("tr");
        var cells = row.querySelectorAll("td");
        var amount = parseFloat(cells[0].textContent);
        var category = cells[1].textContent;
        var date = cells[2].textContent;
        document.getElementById("amount").value = amount.toString();
        document.getElementById("category").value = category;
        document.getElementById("date").value = date;
        row.remove();
    }
    function deleteExpense(button) {
        var row = button.closest("tr");
        row.remove();
    }
});
