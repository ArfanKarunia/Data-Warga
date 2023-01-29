var selectedRow = null

function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null){
        tambah(formData);
    } else {
        update(formData);
    } resetForm();
}
function readFormData() {
    var formData = {};
    formData["nama"]=document.getElementById("nama").value;
    formData["umur"]=document.getElementById("umur").value;
    formData["alamat"]=document.getElementById("alamat").value;
    formData["nomer"]=document.getElementById("nomer").value;
    return formData;
}
//Input Data Pribadi
function tambah(data) {
    var table = document.getElementById("data_p").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1= newRow.insertCell(0);
        cell1.innerHTML = data.nama;
    cell2= newRow.insertCell(1);
        cell2.innerHTML = data.umur;
    cell3= newRow.insertCell(2);
        cell3.innerHTML = data.alamat;
    cell4= newRow.insertCell(3);
        cell4.innerHTML = data.nomer;
    cell5= newRow.insertCell(4);
        cell5.innerHTML= `<button class="btn-edit" onClick="onEdit(this)">Edit</button><button class="btn-hapus" onClick="onDelete(this)">Delete</button>`;
// Input Data Domisili
}
//Edit data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nama").value=selectedRow.cells[0].innerHTML;
    document.getElementById("umur").value=selectedRow.cells[1].innerHTML;
    document.getElementById("alamat").value=selectedRow.cells[2].innerHTML;
    document.getElementById("nomer").value=selectedRow.cells[3].innerHTML;
}
function update(formData){
    selectedRow.cells[0].innerHTML=formData.nama;
    selectedRow.cells[1].innerHTML=formData.umur;
    selectedRow.cells[2].innerHTML=formData.alamat;
    selectedRow.cells[3].innerHTML=formData.nomer;
}

//Delete data
function onDelete(td) {
    if(confirm('Apakah kamu akan menghapus data ini?')) {
        row=td.parentElement.parentElement;
        document.getElementById('data_p').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset data
function resetForm(){
    document.getElementById("nama").value='';
    document.getElementById("umur").value='';
    document.getElementById("alamat").value='';
    document.getElementById("nomer").value='';
    selectedRow=null;
}