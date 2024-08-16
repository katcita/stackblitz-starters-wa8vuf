function show1() {
  const b1 = document.getElementById('b1');
  b1.innerHTML = '<img src="perdu.png" alt="">';
}

function show2() {
  const b2 = document.getElementById('b2');
  b2.innerHTML = '<img src="perdu.png" alt="">';
}

function show3() {
  const b3 = document.getElementById("b3");
  b3.innerHTML = '<img src="gagner.png" alt="">'
}

function rejouer(){
  location.reload();
}