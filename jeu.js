const winNum = obtenirNombreAleatoire()
let score = parseInt( localStorage.getItem("score"))
let dejaGagne = false
document.getElementById("score").innerHTML=score
function show1() {
  const b1 = document.getElementById('b1');
  if(winNum===1){
    if(!dejaGagne){
      score=score+1
      document.getElementById("score").innerHTML=score
      localStorage.setItem("score",score)
      dejaGagne = true
      b1.innerHTML = '<img src="L14.png" alt="">';   
    
    }
  } else{
    b1.innerHTML = '<img src="perdu.png" alt="">';
    
    attendreDeuxSecondes(rejouer)
  }
 
}

function show2() {
  const b2 = document.getElementById('b2');
  if(winNum===2){
    if(!dejaGagne){

    
    score=score+1
    document.getElementById("score").innerHTML=score
    localStorage.setItem("score",score)
    dejaGagne = true
    b2.innerHTML = '<img src="L14.png" alt="">';  
    } 
  } else{
    b2.innerHTML = '<img src="perdu.png" alt="">';
    
    attendreDeuxSecondes(rejouer)
  }
 
}

function show3() {
  const b3 = document.getElementById("b3");
  if(winNum===3){
    if(!dejaGagne){

    
    score=score+1
    document.getElementById("score").innerHTML=score
    localStorage.setItem("score",score)
    
dejaGagne = true
    b3.innerHTML = '<img src="L14.png" alt="">'
 } } else{

  b3.innerHTML = '<img src="perdu.png" alt="">'
  attendreDeuxSecondes(rejouer)
  }
}

function rejouer(){
  location.reload();
}

function stopMusique(){
  const g = document.getElementById("myAudio")
  g.pause()
}

function obtenirNombreAleatoire() {
  // Génère un nombre décimal aléatoire entre 0 et 2.999...
  let nombreAleatoire = Math.random() * 3;

  // Arrondi à l'entier inférieur le plus proche (0, 1 ou 2)
  nombreAleatoire = Math.floor(nombreAleatoire);

  // Ajoute 1 pour obtenir un nombre entre 1 et 3
  return nombreAleatoire + 1;
}

function attendreDeuxSecondes(fonctionAExecuter) {
  setTimeout(fonctionAExecuter, 1000); // 2000 millisecondes = 2 secondes
}