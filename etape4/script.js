"use strict";

// Array containing the persons (initial data)
let persons = [
    { nom: "Nom1", prenom: "Prenom1", points: 5 },
    { nom: "Nom2", prenom: "Prenom2", points: 10 },
    { nom: "Nom3", prenom: "Prenom3", points: 15 }
];

// Counter for numbering the rows
let ligne = 0;

// Variable to calculate the total points
let total_points = 0;

// Initialize the table
init();

// Function to display all persons
function init() {

    // Loop through the persons array
    // Concept: for loop (Slide 45)
    for (let i = 0; i < persons.length; i++) {

        doInsert(
            persons[i].nom,
            persons[i].prenom,
            persons[i].points
        );
    }
}

// Function to insert a row into the HTML table
function doInsertRowTable(num, nom, prenom, points) {

    // Retrieve the HTML table
    // getElementById(): Slides 61-62 
    let table = document.getElementById("tableBody");

    // Insert a new row at the end
    let nouvelleLigne = table.insertRow(-1);

    // Create five cells
    let c1 = nouvelleLigne.insertCell(0);
    let c2 = nouvelleLigne.insertCell(1);
    let c3 = nouvelleLigne.insertCell(2);
    let c4 = nouvelleLigne.insertCell(3);
    let c5 = nouvelleLigne.insertCell(4);

    // Insert the values into the cells
    // textContent: DOM property
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

    // Add the person's points to total_points
    total_points += points;

    // Insert the person into the table
    doInsertRowTable(ligne, nom, prenom, points);

    // Update the summary
    updateSummary();
}

// Function to display the persons array in the console
function consoleTableau() {
    console.table(persons);
}

// Function to update the summary
function updateSummary() {

    // Display the number of rows
    document.getElementById("p1").textContent = `${ligne} ligne(s)`;

    // Display the total points
    document.getElementById("p3").textContent =`Total point(s)= ${total_points}`;
}
