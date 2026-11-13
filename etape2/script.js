function doInsertRowTable(num, nom, prenom, points){

    let table = document.getElementById("table");

    let ligne= table.insertRow(-1);
    
    let celluleNum = ligne.insertCell(0);
    let celluleNom = ligne.insertCell(1);
    let cellulePrenom = ligne.insertCell(2);
    let cellulePoints = ligne.insertCell(3);
    let celluleSelect = ligne.insertCell(4);

    celluleNum.textContent = num;
    celluleNom.textContent = nom;
    cellulePrenom.textContent = prenom;
    cellulePoints.textContent = points;
   
    let checkbok = document.createElement("input");
    checkbok.type = "checkbox";

    celluleSelect.appendChild(checkbok);

    
}