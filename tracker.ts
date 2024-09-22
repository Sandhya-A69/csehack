document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expenseForm") as HTMLFormElement;
    const expenseTableBody = document.getElementById("expenseTableBody") as HTMLTableSectionElement;

    expenseForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get form values
        const amountInput = document.getElementById("amount") as HTMLInputElement;
        const amount = parseFloat(amountInput.value);
        const categoryInput = document.getElementById("category") as HTMLInputElement;
        const category = categoryInput.value;
        const dateInput = document.getElementById("date") as HTMLInputElement;
        const date = dateInput.value;

        // Add expense to table
        addExpense(amount, category, date);

        // Reset form fields
        expenseForm.reset();
    });

    function addExpense(amount: number, category: string, date: string) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${amount.toFixed(2)}</td>
            <td>${category}</td>
            <td>${date}</td>
            <td><button onclick="editExpense(this)">Edit</button> <button onclick="deleteExpense(this)">Delete</button></td>
        `;
        expenseTableBody.appendChild(newRow);
    }

    function editExpense(button: HTMLButtonElement) {
        const row = button.closest("tr") as HTMLTableRowElement;
        const cells = row.querySelectorAll("td");

        const amount = parseFloat(cells[0].textContent as string);
        const category = cells[1].textContent as string;
        const date = cells[2].textContent as string;

        (document.getElementById("amount") as HTMLInputElement).value = amount.toString();
        (document.getElementById("category") as HTMLInputElement).value = category;
        (document.getElementById("date") as HTMLInputElement).value = date;

        row.remove();
    }

    function deleteExpense(button: HTMLButtonElement) {
        const row = button.closest("tr") as HTMLTableRowElement;
        row.remove();
    }
});

