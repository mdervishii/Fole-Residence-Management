const tableBody = document.getElementById("alltable").getElementsByTagName("tbody")[0];


function showall(){
    const buildingA = JSON.parse(localStorage.getItem("A"));
    const buildingB = JSON.parse(localStorage.getItem("B"));
    const buildingC = JSON.parse(localStorage.getItem("C"));

    const buildingarray=[buildingA,buildingB,buildingC]

    const roomtype=["One Bedroom","One Bedroom","Double Studio","Double Studio","Single Studio","Single Studio","Two Bedroom"];
    const buildinfname=["A","B","C"];
    let y=0;

    tableBody.innerHTML = "";

    for(let building of buildingarray){
        let floorvals=Object.entries(building);
        for(let [fl,arr] of floorvals){
            for(let i=0;i<arr.length;i++){
                const newTableRow = tableBody.insertRow();
                newTableRow.insertCell(0).innerHTML = buildinfname[y];
                newTableRow.insertCell(1).innerHTML = fl[1];
                newTableRow.insertCell(2).innerHTML = i + 1;
                newTableRow.insertCell(3).innerHTML=roomtype[i];
                if (arr[i] === 0) {
                    newTableRow.insertCell(4).innerHTML = "FREE";
                } else {
                    newTableRow.insertCell(4).innerHTML = "OCCUPIED";
                }
                newTableRow.insertCell(5).innerHTML="<button class='change'>Change</button>";
            }
        }
        y+=1;
    }
}

showall();

tableBody.addEventListener('click', function(event) {
    
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
      showall();
    }
});