//question 1.1

/*const footerClique = document.getElementsByTagName("footer")[0];
footerClique.addEventListener("click",function(){
    console.log("clique")
});
*/

//question 1.2

let combien = 0
const footerClique = document.getElementsByTagName("footer")[0];
footerClique.addEventListener("click",function(){
    combien ++
    console.log('numéro de clique:'+ combien);
});

//question 2

let navbar = document.getElementById("navbarHeader");
let boutondumenu = document.querySelector(".navbar-toggler");

boutondumenu.addEventListener("click", function(){
    navbar.classList.toggle("collapse");
});

//question 3

let premièrecarte = document.querySelector(".card");
let editcarte1 = document.querySelector(".btn-outline-secondary");
editcarte1.addEventListener("click", function(){
    premièrecarte.style = "color:red";
});

//question 4

let secondecarte = document.querySelectorAll(".card")[1];
let editcarte2 = document.querySelectorAll(".btn-outline-secondary")[1];
editcarte2.addEventListener("click", function(){
    if(secondecarte.style.color ==="green"){
        secondecarte.style.color = "";
    }else{
        secondecarte.style.color = "green";
    }
});

//question 5
const bootstrap = document.head.getElementsByTagName("link")[0]

function apuboostrap(){
    if (bootstrap.disabled === true){

        bootstrap.disabled = false
    }
    else{
    bootstrap.disabled = true
    }
}
footerClique.addEventListener("dblclick", apuboostrap)

//question 6

let viewBtns = document.querySelectorAll(".btn-success");
for (let i = 0; i < viewBtns.length; i++) {
  viewBtns[i].addEventListener("mouseenter", function () {
    let cardImage = document.querySelectorAll(".card-img-top")[i];
    let cardText = document.querySelectorAll(".card-text")[i];

    cardText.toggleAttribute("hidden");
    if (cardImage.style.width === "20%") {
      cardImage.style.width = "100%";
    } else {
      cardImage.style.width = "20%";
    }
  });
}

//question 7

let flechededroite = document.querySelector(".btn-secondary.my-2");

flechededroite.addEventListener("click", function () {

let ttelescartes = document.querySelectorAll(".col-md-4");
let dernierecarte = document.querySelectorAll(".col-md-4")[5];
let grandchefconservateur = ttelescartes[5].parentNode;


grandchefconservateur.insertBefore(ttelescartes[5], ttelescartes[0]);
});

//question 8

let flechedegauche = document.querySelector(".btn-primary.my-2");
flechedegauche.removeAttribute("href");

flechedegauche.addEventListener("click", function () {

let ttelescartes = document.querySelectorAll(".col-md-4");
let dernierecarte = document.querySelectorAll(".col-md-4")[5];
let grandchefcommuniste = ttelescartes[5].parentNode;


grandchefcommuniste.appendChild(ttelescartes[0]);
});

//question 9




