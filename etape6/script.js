
let persons=[
    { nom:"Nom1", prenom:"Prenom1", points:5},
    { nom:"Nom2", prenom:"Prenom2", points:10},
    { nom:"Nom3", prenom:"Prenom3", points:15},
   
];

let ligne=0;
let total_points=0;

init();

function init(){
  for (let i=0; i<persons.length; i++){

    doInsert(
        persons[i].nom,
        persons[i].prenom,
        persons[i].points
    );
  }
}

function doInsertRowTable(num, nom, prenom, points) {

    let table = document.getElementById("tableBody");

    let ligne = table.insertRow(-1);

    let c1 = ligne.insertCell(0);
    let c2 = ligne.insertCell(1);
    let c3 = ligne.insertCell(2);
    let c4 = ligne.insertCell(3);
    let c5 = ligne.insertCell(4);
    
    c5.classList.add("col_chkbox");
    c1.textContent = num;
    c2.textContent = nom;
    c3.textContent = prenom;
    c4.textContent = points;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    c5.appendChild(checkbox);
}



function doInsert(nom, prenom, points){
    ligne++;

    total_points += points;

    doInsertRowTable(ligne, nom, prenom, points);
    updateSummary();
}

function consoleTableau(){
    console.table(persons);
}

function updateSummary() {
    document.getElementById("p1").textContent = `${ligne} ligne(s)`;
    document.getElementById("p3").textContent = `${total_points} point(s)`;
}

function doNewData(){
    let nom= document.getElementById("form_nom").value;
    let prenom= document.getElementById("form_prenom").value;
    let points= document.getElementById("form_points").value;

    if (nom=="" || prenom=="" || points=="" ) {
        alert("Veuillez remplir tous les champs.");
    } else {
        doInsert(nom, prenom, parseInt(points));

         persons.push({ nom: nom, prenom: prenom, points: parseInt(points) });

    }

    document.getElementById("form_nom").value = "";
    document.getElementById("form_prenom").value = "";
    document.getElementById("form_points").value = "";
}
 
function deleteRow() {

    if (ligne === 0) {
        alert("Aucune ligne à supprimer.");
        return;
    }

    let table = document.getElementById("tableBody");
    let checkboxes = table.querySelectorAll(".col_chkbox input");

        if (checkboxes.length === 0) {
            alert("Veuillez sélectionner au moins une ligne à supprimer.");
            return;
        }

        let selection= false;
        for (let i =0;i<checkboxes.length ; i++) {
            if (checkboxes[i].checked) {
                selection = true;
                break;
            }
        }

        if (!selection) {
            alert("Veuillez sélectionner au moins une ligne à supprimer.");
            return;
        }

        if (!confirm("Voulez-vous supprimer les lignes sélectionnées ?")) {
            return;
        }

        let rows=table.rows;
        for (let i = rows.length - 1; i >= 0; i--) {
            let checkbox = rows[i].querySelector(".col_chkbox input");
            if (checkbox && checkbox.checked) {
               let points= Number(rows[i].cells[3].textContent);
                total_points -= points;
                ligne--;
                table.deleteRow(i);
                persons.splice(i, 1);
            }
    }
    alert("Les lignes sélectionnées ont été supprimées.");
    updateSummary();
}