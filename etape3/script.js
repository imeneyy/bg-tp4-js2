
let persons=[
    { nom:"Nom1", prenom:"Prenom1", points:5},
    { nom:"Nom2", prenom:"Prenom2", points:10},
    { nom:"Nom3", prenom:"Prenom3", points:15},
   
];

let ligne=0;


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
    doInsertRowTable(ligne, nom, prenom, points);
}

function consoleTableau(){
    console.table(persons);
}

