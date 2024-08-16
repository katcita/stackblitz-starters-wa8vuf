let luis = 'color arc en ciel';

let test = document.getElementById('test');
test.innerHTML = luis;

const TY = 'bienvenue chez Irina';
test.innerHTML = TY;

test.style.textAlign = 'center';
test.style.border = 'solid violet';
test.style.color = 'yellow';
test.style.background = 'red';

let manum = document.getElementById('manum');
manum.style.border = 'solid violet';

let boolma = document.getElementById('boolma');
let bool = 55 === 5;
boolma.innerHTML = bool;
boolma.style.background = 'blue';
boolma.style.color = 'red';

let wer = true;
let tyu = false;
let testop = document.getElementById('testop');
testop.innerHTML = !(wer || tyu) || 7 < 9;

let boolif = document.getElementById('boolif');
let bo = true || 50 > 20;
if (!!bo) {
  boolif.innerHTML = 'Marie';
} else {
  boolif.innerHTML = 'Mano rien du tout hahaha';
}

boolif.style.color = 'brown';

function ri() {
  let nul = document.getElementById('nul');
  const b = !true && 506 < 90;
  if (!!!b) {
    nul.innerHTML = 'tu est beau';
  } else {
    nul.innerHTML = "tu n'est pas beau";
  }
}

ri();
