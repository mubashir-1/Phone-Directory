var selectedRow = null;

function onFormSubmit() {
    var formData = readData()

    if (selectedRow == null) {
        insertNewRecord(formData)
    } else {
        updateRecord(formData)
    }

    resetFormData()
}

function readData() {
    var formData = {}

    formData["fullname"] = document.getElementById("fullname").value
    formData["Contact"] = document.getElementById("Contact").value

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("classEmployee").getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length)

    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.fullname;

    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.Contact;

    cell3 = newRow.insertCell(2)
    cell3.innerHTML = `<button onclick="onEdit(this)"> Edit </button>
                    <button onclick="onDelete(this)"> Delete </button>`
}
function resetFormData() {
    document.getElementById('fullname').value = ""
    document.getElementById('Contact').value = ""
    selectedRow = null
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Contact').value = selectedRow.cells[1].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.Contact;

}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this?')) {
        row = td.parentElement.parentElement
        document.getElementById("classEmployee").deleteRow(row.rowIndex)
    }
}

