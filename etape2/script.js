
"use strict";

// Function to insert a new person into the HTML table
// DOM manipulation: Slide 106
function doInsertRowTable(num, nom, prenom, points) {

    // Retrieve the HTML table using its ID
    // getElementById(): Slides 61-62
    let table = document.getElementById("table");

    // Insert a new row at the end of the table
    // HTML table DOM method: insertRow()
    let ligne = table.insertRow(-1);

    // Create five cells inside the new row
    // HTML table DOM method: insertCell()
    let celluleNum = ligne.insertCell(0);
    let celluleNom = ligne.insertCell(1);
    let cellulePrenom = ligne.insertCell(2);
    let cellulePoints = ligne.insertCell(3);
    let celluleSelect = ligne.insertCell(4);

    // Insert the values into the cells
    // innerText property: Slide 91
    celluleNum.innerText = num;
    celluleNom.innerText = nom;
    cellulePrenom.innerText = prenom;
    cellulePoints.innerText = points;

    // Create a checkbox element
    // createElement(): Slide 104
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    // Insert the checkbox into the fifth cell
    // appendChild(): Slides 103-104
    celluleSelect.appendChild(checkbox);
}
