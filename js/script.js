const $ = (id) => document.getElementById(id)

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = $('addForm')
const table = $('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
const count = () => {
    // <table> >>   <tbody> >>  <tr> array length minus one <th>
    $('empCount').innerHTML = `(${table.children[0].children.length - 1})`;
}
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    const data = {
        id: $('id').value,
        name: $('name').value,
        extension: $('extension').value,
        email: $('email').value,
        department: $('department').value
    }

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cell;
    Object.keys(data).forEach((key, i) => {
        cell = row.insertCell()

        // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
        cell.appendChild(document.createTextNode(data[key]))
    })

    // CREATE THE DELETE BUTTON
    cell = row.insertCell()
    let del = document.createElement('button')
    del.className = 'btn btn-danger btn-sm float-end delete'
    del.appendChild(document.createTextNode('X'))
    cell.appendChild(del)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count()
})

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            table.deleteRow(e.target.parentElement.parentElement.rowIndex)
            count()
        }
    }
})