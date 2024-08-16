let Hel = document.getElementById('Hep');
Hel.innerHTML = '10px';

const HC = 'Henriiv est un roi de France';

Hel.innerHTML = HC;
Hel.style.border = 'solid red';
Hel.style.color = 'red';

const BoolHe = document.getElementById('BoolHe');
const bool = 8 >= 8;
BoolHe.innerHTML = bool;
BoolHe.style.border = 'red solid';
BoolHe.style.textAlign = 'center';

//const x =confirm("Quel age as-tu?")
const Hif = document.getElementById('Hif');
const Hb = 78 > 530;
if (!!!!Hb) {
  Hif.innerHTML = 'He oui.';
} else {
  Hif.innerHTML = 'Rien du tout!!!';
}

function H12(Hen) {
  const HH2 = document.getElementById('HH');
  const b = !true || 70 < 77;
  if (!!b) {
    HH2.innerText = 'Henri.' + Hen;
  } else {
    HH2.innerText = 'Rien.';
  }
}

H12('Henriiv');
