let user = null;

// START APP
function render() {
  const app = document.getElementById("app");

  if (!user) {
    app.innerHTML = loginPage();
  } else {
    app.innerHTML = dashboard();
  }
}

// LOGIN PAGE
function loginPage() {
  return `
    <div class="container">
      <h2>Login</h2>
      <input id="username" placeholder="Naam"><br>
      <button onclick="login()">Login</button>
    </div>
  `;
}

// LOGIN FUNCTION
function login() {
  const name = document.getElementById("username").value;

  if (name) {
    user = name;
    render();
  }
}

// DASHBOARD
function dashboard() {
  return `
    <header>
      Welkom ${user} 
      <button onclick="logout()">Logout</button>
    </header>

    <div class="container">
      <button onclick="show('berichten')">📩 Berichten</button>
      <button onclick="show('taken')">📚 Taken</button>
      <button onclick="show('agenda')">📅 Agenda</button>

      <div id="content"></div>
    </div>
  `;
}

// LOGOUT
function logout() {
  user = null;
  render();
}

// NAVIGATIE
function show(pagina) {
  const content = document.getElementById("content");

  if (pagina === "berichten") {
    content.innerHTML = `
      <h3>Berichten</h3>
      <div class="card">Van: Leerkracht → Maak je taak</div>
      <button onclick="nieuwBericht()">Nieuw bericht</button>
    `;
  }

  if (pagina === "taken") {
    content.innerHTML = `
      <h3>Taken</h3>
      <div class="card">Wiskunde tegen morgen</div>
    `;
  }

  if (pagina === "agenda") {
    content.innerHTML = `
      <h3>Agenda</h3>
      <div class="card">Toets vrijdag</div>
    `;
  }
}

// NIEUW BERICHT
function nieuwBericht() {
  let txt = prompt("Typ je bericht:");
  if (txt) {
    alert("Verzonden!");
  }
}

// START
render();
