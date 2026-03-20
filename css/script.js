// Functie voor navigatie (klik op kaarten)
function openPage(pagina) {
  document.getElementById("content").innerHTML = getPageContent(pagina);
}

// Inhoud per pagina
function getPageContent(pagina) {

  if (pagina === "Berichten") {
    return `
      <h2>📩 Berichten</h2>
      <p>Hier komen je berichten.</p>
      <button onclick="stuurBericht()">Nieuw bericht</button>
    `;
  }

  if (pagina === "Taken") {
    return `
      <h2>📚 Taken</h2>
      <ul>
        <li>Wiskunde oefenen</li>
        <li>Frans leren</li>
      </ul>
    `;
  }

  if (pagina === "Agenda") {
    return `
      <h2>📅 Agenda</h2>
      <p>Geen events gepland.</p>
    `;
  }

  return `<h2>Welkom</h2>`;
}

// Simpele bericht functie
function stuurBericht() {
  let naam = prompt("Naar wie?");
  let bericht = prompt("Typ je bericht:");

  if (naam && bericht) {
    alert("Bericht gestuurd naar " + naam + "!");
  }
}

// Startpagina instellen
window.onload = function () {
  // Zorg dat er een content div bestaat
  let main = document.querySelector("main");

  let contentDiv = document.createElement("div");
  contentDiv.id = "content";

  main.appendChild(contentDiv);
};
