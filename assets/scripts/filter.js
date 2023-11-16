const submitb = document.getElementById("search-button");
const selectbuil = document.getElementById("buildingSelect");
const selectfloor = document.getElementById("Floor");
const selectavl = document.getElementById("availabilitySelect");
const TableBody = document.getElementById("myTable").getElementsByTagName("tbody")[0];

function showfilter(){
    const bvalue = selectbuil.value;
    const fvalue = selectfloor.value;
    const avalue = parseInt(selectavl.value, 10);

    const buildingO = JSON.parse(localStorage.getItem(bvalue));
    const aparray = buildingO[fvalue];

    const roomtype=["One Bedroom","One Bedroom","Double Studio","Double Studio","Single Studio","Single Studio","Two Bedroom"];

    TableBody.innerHTML = "";

    for (let i = 0; i < aparray.length; i++) {
        if(aparray[i]===avalue){
            const newTableRow = TableBody.insertRow();
            newTableRow.insertCell(0).innerHTML = bvalue;
            newTableRow.insertCell(1).innerHTML = fvalue[1];
            newTableRow.insertCell(2).innerHTML = i + 1;
            newTableRow.insertCell(3).innerHTML=roomtype[i];
            if (aparray[i] === 0) {
                newTableRow.insertCell(4).innerHTML = "FREE";
            } else {
                newTableRow.insertCell(4).innerHTML = "OCCUPIED";
            }
            newTableRow.insertCell(5).innerHTML="<button class='change'>Change</button>"
        }
    }
}
submitb.addEventListener("click", function () {
    showfilter();
});

TableBody.addEventListener('click', function(event) {
    
    if (event.target.classList.contains('change')) {
      
      var row = event.target.closest('tr');
      var rowData = row.textContent.trim(); 
    
      build=JSON.parse(localStorage.getItem(rowData[0]));
      arr=build["k"+rowData[1]];
      index=parseInt(rowData[2])-1;

      if(arr[index]===0){
        arr[index]=1;
      }
      else{
        arr[index]=0;
      }
      localStorage.setItem(rowData[0], JSON.stringify(build));
      showfilter();
    }
});

