// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById("employeeForm");
const table = document.getElementById("employeeTable").getElementsByTagName('tbody')[0];
const employeeCount = document.getElementById("employeeCount");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count =0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    
    // GET THE VALUES FROM THE TEXT BOXES
    const empID = document.getElementById("empID").value.trim();
    const fullName = document.getElementById("fullName").value.trim();
    const extension = document.getElementById("extension").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellExt = row.insertCell(2);
    let cellEmail = row.insertCell(3);
    let cellDept = row.insertCell(4);
    let cellDelete = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(empID));
    cellName.appendChild(document.createTextNode(fullName));
    cellExt.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.appendChild(document.createTextNode("X"));
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
     document.getElementById("empID").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
     count++;
     employeeCount.textContent = `(${count})`;


});

// DELETE EMPLOYEE
function deleteEmployee(e) {
    if (confirm("Are you sure you want to delete this employee?")) {
        let row = e.target.parentNode.parentNode; // Select the row of the clicked delete button
        table.deleteRow(row.rowIndex - 1);
        count--; // DECREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
        employeeCount.textContent = `(${count})`;
    }
}
