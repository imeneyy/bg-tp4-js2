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
     
    c5.classList.add("col_chkbox");
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
    // Slide 40
    updateSummary();
}

// Function to display the persons array in the console
function consoleTableau() {
    console.table(persons);
}

// Function to update the summary
function updateSummary() {

    // Display the number of rows
    document.getElementById("p1").textContent =
        `${ligne} ligne(s)`;

    // Display the total points
    document.getElementById("p3").textContent =
        `Total point(s)= ${total_points}`;
}
 

// Function to retrieve and insert new data from the form
function doNewData() {

    // Retrieve the input elements
    // getElementById(): Slides 61-62 
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Retrieve the values entered by the user
    let nom = elt_nom.value;
    let prenom = elt_prenom.value;
    let points = parseInt(elt_points.value, 10);

    // Check that no input field is empty
    // Number.isNaN() checks whether points is a valid number
    if (nom.trim() === "" || prenom.trim() === "" ||
        elt_points.value.trim() === "" || Number.isNaN(points)) {

        // Display an alert if the form is incomplete
        alert("Formulaire incomplet !");

    } else {

        // Insert the new person into the HTML table
        doInsert(nom, prenom, points);

        // Insert the new person into the persons array
        // push(): adds an element to the end of an array
        persons.push({
            nom: nom,
            prenom: prenom,
            points: points
        });

        // Clear the input fields
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

// Function to delete selected rows
function deleteRow() {

    // Check if the table is empty
    if (ligne === 0) {
        alert("Aucune ligne à supprimer.");
        return;
    }

    // Retrieve the table and selected checkboxes
    // querySelectorAll() retrieves all matching checkboxes
    let table = document.getElementById("tableBody");
    let checkboxes = table.querySelectorAll(".col_chkbox input");

    // Check if at least one checkbox is selected
    let selection = false;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selection = true;
            break;
        }
    }

    // If no checkbox is selected, display an alert
    if (!selection) {
        alert("Veuillez sélectionner au moins une ligne à supprimer.");
        return;
    }

    //  Ask the user for confirmation
    if (!confirm("Voulez-vous supprimer les lignes sélectionnées ?")) {
        return;
    }

    //  Retrieve all rows from the table
    let rows = table.rows;

    // Browse the rows backwards
    for (let i = rows.length - 1; i >= 0; i--) {

        // Retrieve the checkbox of the current row
        let checkbox = rows[i].querySelector(".col_chkbox input");

        // Check whether the checkbox is selected
        if (checkbox && checkbox.checked) {

            // Retrieve the points from the fourth cell
            let points = Number(rows[i].cells[3].textContent);

            // Subtract the points from the total
            total_points -= points;

            // Decrement the row counter
            ligne--;

            // Delete the row from the HTML table
            table.deleteRow(i);

            // Delete the corresponding person from the array
            persons.splice(i, 1);
        }
    }
     for (let i =0 ; i<table.rows.length;i++){
        table.rows[i].cells[0].textContent= i+1;
    }
     ligne=table.rows.length;
    //  Display a success message
    alert("Les lignes sélectionnées ont été supprimées.");

    // Update the summary
    updateSummary();
}