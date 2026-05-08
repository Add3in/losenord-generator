const ord = [
  "sol", "skog", "vatten", "berg", "vind", "eld",
  "stjarna", "hav", "moln", "regn", "sno", "ljus",
  "morker", "blad", "rot"
];

const special = "!@#$%&*?";

function slumpa(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function generera() {
  // oftast dubbelord
  let lösen = slumpa(ord) + slumpa(ord);

  // ibland tre ord
  if (Math.random() < 0.4) {
    lösen += slumpa(ord);
  }

  lösen += Math.floor(Math.random() * 10);
  lösen += slumpa(special);

  document.getElementById("losenord").innerText = lösen;
}

function kopiera() {
  const text = document.getElementById("losenord").innerText;
  navigator.clipboard.writeText(text);
  alert("Kopierat!");
}

window.onload = generera;
