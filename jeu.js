const winNum = obtenirNombreAleatoire()
let score = parseInt( localStorage.getItem("score"))
let joueur= localStorage.getItem("joueur") || "anon"
const j=document.getElementById("joueur")
  j.innerHTML=joueur


let dejaGagne = false
if(!score){
  localStorage.setItem("score",0)
  score=0
}
document.getElementById("score").innerHTML=score||0
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
    
  }
  attendreDeuxSecondes(rejouer)
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
    
   }
   attendreDeuxSecondes(rejouer)
  

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
  }
  attendreDeuxSecondes(rejouer)
  
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

function sn(){
  const nom=document.getElementById("nom")
  localStorage.setItem("joueur",nom.value)
  const j=document.getElementById("joueur")
  j.innerHTML=nom.value

}

function update1(){
  let sc = localStorage.getItem("score")
  let verifierCarte = localStorage.getItem("carte1")
  if(sc>=5 || verifierCarte){ 
  const b1=document.getElementById("carte1")
  b1.src="/carte1.jpg"
  const b2=document.getElementById("carte2")
  b2.src="/carte1.jpg"
  const b3=document.getElementById("carte3")
  b3.src="/carte1.jpg"
  if(!verifierCarte){
    localStorage.setItem("score", sc-5)
    const score=document.getElementById("score")
    score.innerHTML = sc-5
    localStorage.setItem("carte1",true)
  }
  
  localStorage.setItem("carteActuelle", "carte1")
}

}

function update2(){
  const sc = localStorage.getItem("score")
  if(sc>=4){
  const b1 = document.getElementById("carte1")
  b1.src="/carte2.jpg"
  const b2=document.getElementById("carte2")
  b2.src="/carte2.jpg"
  const b3=document.getElementById("carte3")
  b3.src="/carte2.jpg"
  localStorage.setItem("score",sc-4)
  const score=document.getElementById("score")
  score.innerHTML=sc-4

}
}

function update3(){
  const sc = localStorage.getItem("score")
  if(sc>=6){
 
  const b1 = document.getElementById("carte1")
b1.src = "/carte3.jpg"
const b2 = document.getElementById("carte2")
b2.src = "/carte3.jpg"
const b3 = document.getElementById("carte3")
b3.src = "/carte3.jpg"
localStorage.setItem("score",sc-6)
  const score=document.getElementById("score")
  score.innerHTML=sc-6

  }
}