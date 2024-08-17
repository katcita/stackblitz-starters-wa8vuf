const winNum = obtenirNombreAleatoire()

function show1() {
  const b1 = document.getElementById('b1');
  if(winNum===1){
    b1.innerHTML = '<img src="gagner.png" alt="">';   
  } else{
    b1.innerHTML = '<img src="perdu.png" alt="">';
  }
 
}

function show2() {
  const b2 = document.getElementById('b2');
  if(winNum===2){
    b2.innerHTML = '<img src="gagner.png" alt="">';   
  } else{
    b2.innerHTML = '<img src="perdu.png" alt="">';
  }
 
}

function show3() {
  const b3 = document.getElementById("b3");
  if(winNum===3){

    b3.innerHTML = '<img src="gagner.png" alt="">'
  } else{

  b3.innerHTML = '<img src="perdu.png" alt="">'
  }
}

function rejouer(){
  location.reload();
}

function obtenirNombreAleatoire() {
  // Génère un nombre décimal aléatoire entre 0 et 2.999...
  let nombreAleatoire = Math.random() * 3;

  // Arrondi à l'entier inférieur le plus proche (0, 1 ou 2)
  nombreAleatoire = Math.floor(nombreAleatoire);

  // Ajoute 1 pour obtenir un nombre entre 1 et 3
  return nombreAleatoire + 1;
}
