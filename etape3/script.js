
"use strict";

// Array containing the persons (initial data)
let persons = [
    { nom: "Nom1", prenom: "Prenom1", points: 5 },
    { nom: "Nom2", prenom: "Prenom2", points: 10 },
    { nom: "Nom3", prenom: "Prenom3", points: 15 }
];

// Counter for numbering the rows
let ligne = 0;

// Initialize the table
init();

// Function to display all persons
function init() {

    // Loop through the persons array
    // Concept: for loop (Slide 45)
    for (let i = 0; i < persons.length; i++) {

        // Access the properties of each person object
        doInsert(
            persons[i].nom,
            persons[i].prenom,
            persons[i].points
        );
    }
}

// Function to insert a row into the HTML table
function doInsertRowTable(num, nom, prenom, points) {

    // Retrieve the HTML table using its ID
    // getElementById(): Slides 61-62
    let table = document.getElementById("table");

    // Insert a new row at the end of the table
    // HTML table method: insertRow()
    let nouvelleLigne = table.insertRow(-1);

    // Create five cells 
    // HTML table method: insertCell()
    let c1 = nouvelleLigne.insertCell(0);
    let c2 = nouvelleLigne.insertCell(1);
    let c3 = nouvelleLigne.insertCell(2);
    let c4 = nouvelleLigne.insertCell(3);
    let c5 = nouvelleLigne.insertCell(4);

    // Insert the values into the cells
    c1.textContent = num;
    c2.textContent = nom;
    c3.textContent = prenom;
    c4.textContent = points;

    // Create a checkbox
    // createElement(): Slide 104
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Insert the checkbox into the fifth cell
    // appendChild(): Slides 103-104
    c5.appendChild(checkbox);
}

// Function to insert a person
function doInsert(nom, prenom, points) {

    // Increment the row counter
    ligne++;

    // Insert the person into the HTML table
    doInsertRowTable(ligne, nom, prenom, points);
}

// Function to display the persons array in the console
function consoleTableau() {

    // Display the array as a table in the console
    console.table(persons);
}
