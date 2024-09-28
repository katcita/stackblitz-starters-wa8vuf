function changerCouleurTitre(){
 const titre = document.getElementById("monTitre")
 titre.style.color="red"    
}


function changerTexte(){
    const texte = document.getElementById("monParagraphe")
    texte.textContent = "S"
}

function agrandirImage(){
  const moty = document.getElementById("monImage") 
  moty.style.width = "456px" 
}

function changerFond(){
    const body = document.body 
    body.style.backgroundColor="yellow"
}

function faireDisparaitreImage(){
  const fra = document.getElementById("monImage2")
  fra.style.display="none"

}

function changerPolice(){
  const A =document.getElementById("monTexte")
  A.style.fontFamily="cursive"
}


function mettreEnItallique(){
  const ir = document.getElementById("monTexte2")
  ir.style.fontStyle="italic"
}
function mettreEnMajuscules(){
  const A2 = document.getElementById("monTitre2")
  A2.style.textTransform="uppercase"
}

function changerTexteBouton(){
  const rere = document.getElementById("monBouton")
  rere.textContent="Je  suis Irina."
}

const tableau = ["Irina","Adriel","Louis XIV"]

function afficherTableau(){
  const ta = document.querySelector("#tab")
  tableau.push("Adriel")
  tableau.pop()
  tableau.shift()
  tableau.unshift("Irina")
  tableau[0] += " Stella"
  tableau[1] +=" ALJORD"
  let x = 3
  x += 1
  ta.innerHTML = x
}
function afficherTableau2(){
  const tab2 = document.querySelector("#tab2")
  tableau.push("patrick")
  tableau.pop()
  tableau.shift()
  tableau.unshift("Irina")
  tab2.innerHTML = tableau
}

function c9(){
const a13=document.querySelector("#qqq")
a13.style.backgroundColor='orange'
//a13.setAttribute("class","aaa")
//a13.classList.add("aaa")
//a13.classList.remove("aaa")
//a13.classList.toggle("aaa")
a13.style.textAlign="center"
a13.classList.add("aaa","iii")
}

function chc(){
  const color=document.getElementById("colormana").value;
  document.body.style.backgroundColor= color
}
function air() {
 const date=document.querySelector("#ho8").value;
 document.querySelector("#Air").innerHTML=date 
}
function toggle() {
  const A20=document.querySelector("#AAA")
  A20.classList.toggle("hidden")
}

function toggleImage() {
  const monImage = document.getElementById("monImage")
  monImage.classList.toggle("hidden")
  
}

function fm() {
 const  divmana = document.getElementById("divmana") 
 divmana.innerHTML= 0.35>0.60
}

function tyty() {
const ar=document.getElementById("ar") 
 
const mimi=document.getElementById("mimi")
mimi.style.color=ar.value
}

function zzzz() {
  const yu = document.querySelector("#yu")
  
  document.body.innerHTML=yu.value
  
}

function r() {
const r = document.querySelector("#r")
const q= ["www","trghx"]
q.push('IRINA')
q.pop()
q.unshift('IRINA')
r.innerHTML="trell".length
}

r()


function vp() {
const psw=document.getElementById("psw")  
const msg=document.getElementById("msg")
if (psw.value.length<=4) {
  msg.innerHTML= "trop court"
} else {
  msg.innerHTML="bien 🎂🎂🎂🎂🎂🎂🎂🎂"
}

}

function ov() {
  const p=document.getElementById("psw2")
const m=document.getElementById("msg2")
//m.innerHTML=p.value.length

if (p.value.length<4 ) {
  m.innerHTML="⚠️trop court"
} else {
  m.innerHTML="bravo!🥯🥞🧇🧀🍖🍗🍖🥩🥩🥓🥓🍔🍟🍔🍟🍟🍕🌭🌭🥪🥪🥨🥖🥯🥐🌮🥐🧂🍞🌯🍞🫔🌰🫔🫔🥙🥜🎂🧁🧁🍬🧁🧁🍫🥧🥧🍫🥧🍵🍬☕🦪🥛🍣🍨🍣🍩🍮🍩🍮🍨🍯🍧🍧🍼🍭🍼🥛🍺🥛🥂☕🍹☕🍷🍧🍧🍵🍨🍪🍪🍤🍩🍥🍩🍨🥮🥮🍧🍡🍤🍡☕🥟🍱🥫🧂🧈🧈🧈🧈🥧🍫🧊🍸🧊🍽🥢🍬🍽🍴🍭🔪🍺🔪🍻🏺🍮🏺🍯🍯🥂🥃🍻🥃🍻🥤🏺🥤🍼🥛🥛🥦🥝🍅🫒🥥🥑🍆🍍🍄🍍🧄🥑🫐🍈🥕🍇🍎🍇🥕🥒🍞🥬🥕🥬🥕🥦🍏🧄🍐🧅🌽🧅🍑🍄🍑🍄🍒🥜🍒🥜🫑🥓🌶🍞🍞🌽🍟🍔🍔🍕🫕🌭🫕🥪🥣🌭🥗🥗🍿🍲🍲🥘🥘🫕🍞🥣🥩🍞🥗🍟🥐🥐🌭🫓🥖🥖🫓🥨🥨🥨🥦🥦🥦🥬🍅🥬🥝🥝🫒🫐🫐🥥🍓🍓🥑🥒🥒🍆🥯🥯🥔🥞🥕🧇🍳"
}


}

function cgr() {
const col1=document.getElementById("col1")
const col2=document.getElementById("col2")
const gr=document.getElementById("gr")
gr.style.background="linear-gradient(to right,"+col1.value+","+col2.value+")"  
}