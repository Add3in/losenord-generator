const ord = [
  "sol", "skog", "vatten", "berg", "vind", "eld",
  "stjarna", "hav", "moln", "regn", "sno", "ljus",
  "morker", "blad", "rot"
];

const special = "!@#$%&*?";

function slumpa(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function storBokstav(ord) {
  return ord.charAt(0).toUpperCase() + ord.slice(1);
}

function generera() {
  // två ord, varje ord börjar med stor bokstav
  let lösen = storBokstav(slumpa(ord)) + storBokstav(slumpa(ord));

  // ibland ett tredje ord
  if (Math.random() < 0.4) {
    lösen += storBokstav(slumpa(ord));
  }

  // siffra + specialtecken
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
