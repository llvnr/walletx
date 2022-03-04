<template>
  <div class="container__navigation_deux">
    <div class="navigation__deux_header">
      <div class="wallet_icon">
        <i class="fa-solid fa-wallet"></i>
      </div>
      Vos Monnaies
    </div>
    <div class="navigation__deux_body">
      <div class="monnaie">
        <div class="parentMonnaie">
          <div class="divLogo">
            <img src="https://img.icons8.com/color/45/000000/bitcoin--v1.png" />
          </div>
          <div class="divContenu">
            <b>Ghostfox</b> <br />
            <small>250.454 GHX</small>
          </div>
        </div>

        <div class="parentMonnaie">
          <div class="divLogo">
            <img src="https://img.icons8.com/color/45/000000/bitcoin--v1.png" />
          </div>
          <div class="divContenu">
            <b>Ghostfox</b> <br />
            <small>250.454 GHX</small>
          </div>
        </div>

        <div class="parentMonnaie">
          <div class="divLogo">
            <img src="https://img.icons8.com/color/45/000000/bitcoin--v1.png" />
          </div>
          <div class="divContenu">
            <b>Ghostfox</b> <br />
            <small>250.454 GHX</small>
          </div>
        </div>

        <div class="parentMonnaie">
          <div class="divLogo">
            <img src="https://img.icons8.com/color/45/000000/bitcoin--v1.png" />
          </div>
          <div class="divContenu">
            <b>Ghostfox</b> <br />
            <small>250.454 GHX</small>
          </div>
        </div>

        <div class="parentMonnaie">
          <div class="divLogo">
            <img src="https://img.icons8.com/color/45/000000/bitcoin--v1.png" />
          </div>
          <div class="divContenu">
            <b>Ghostfox</b> <br />
            <small>250.454 GHX</small>
          </div>
        </div>

        <div class="parentMonnaie">
          <div class="divLogo">
            <img src="https://img.icons8.com/color/45/000000/bitcoin--v1.png" />
          </div>
          <div class="divContenu">
            <b>Ghostfox</b> <br />
            <small>250.454 GHX</small>
          </div>
        </div>

        <div class="parentMonnaie">
          <div class="divLogo">
            <img src="https://img.icons8.com/color/45/000000/bitcoin--v1.png" />
          </div>
          <div class="divContenu">
            <b>Ghostfox</b> <br />
            <small>250.454 GHX</small>
          </div>
        </div>

        <div class="parentMonnaie">
          <div class="divLogo">
            <img src="https://img.icons8.com/color/45/000000/bitcoin--v1.png" />
          </div>
          <div class="divContenu">
            <b>Ghostfox</b> <br />
            <small>250.454 GHX</small>
          </div>
        </div>

        <div class="parentMonnaie">
          <div class="divLogo">
            <img src="https://img.icons8.com/color/45/000000/bitcoin--v1.png" />
          </div>
          <div class="divContenu">
            <b>Ghostfox</b> <br />
            <small>250.454 GHX</small>
          </div>
        </div>

        <div class="parentMonnaie">
          <div class="divLogo">
            <img src="https://img.icons8.com/color/45/000000/bitcoin--v1.png" />
          </div>
          <div class="divContenu">
            <b>Ghostfox</b> <br />
            <small>250.454 GHX</small>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation__deux_footer">
      <div class="wallet_icon">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>
  </div>

  <div class="container__body">

    <div class="body__cadre_user">

      <img
        class="cadre_user_profil"
        src="https://ui-avatars.com/api/?name=Cyberghost&background=000000&color=fff&rounded=true&size=40"
      />
    </div>

    <div class="container__fluid">
      <h2>Informations sur le noeud</h2>

      <div class="parent">
        <div class="div1">

          <div class="cadreDashboard">

              <h3>Monnaie courante</h3>
              <small>Ghostcoin</small>

          </div>

        </div>
        <div class="div2">

          <div class="cadreDashboard">

              <h3>Sigle</h3>
              <small>GHX</small>

          </div>

        </div>
        <div class="div3">

          <div class="cadreDashboard">

              <h3>Utilisateurs</h3>
              <small>25</small>

          </div>

        </div>
        <div class="div4">

          <div class="cadreDashboard">

              <h3>Etat du noeud</h3>
              <small>En ligne</small>

          </div>

        </div>
      </div>

      <br>

      <div class="parent">
        <div class="div1">

          <div class="cadreDashboard">

              <h3>Extension du noeud</h3>
              <small>@ghostfox.net</small>

          </div>

        </div>
        <div class="div2">

          <div class="cadreDashboard">

              <h3>Transactions</h3>
              <small>25</small>

          </div>

        </div>
        <div class="div3">

          <div class="cadreDashboard">

              <h3>Volumes d'échanges</h3>
              <small>25.000 GHX</small>

          </div>

        </div>
        <div class="div4">

          <div class="cadreDashboard">

              <h3>Noeud public</h3>
              <small>1</small>

          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Dashboard",
  data() {
    return {
      groupe: 0,
      client: 0,
      manager: 0,
      categorie: 0,
      serveur: 0,
      channel: 0,
      campagne: 0,
    };
  },
  mounted() {
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://192.168.223.136:8001/api/auth/statistiques", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let resultat = JSON.parse(result);

        if (resultat.message === "Success") {
          this.groupe = resultat.groupe;
          this.client = resultat.client;
          this.manager = resultat.manager;
          this.categorie = resultat.categorie;
          this.serveur = resultat.serveur;
          this.channel = resultat.channel;
          this.campagne = resultat.campagne;
        }
      })
      .catch((error) => console.log("error", error));
  },
  components: {},
};
</script>

<style>

.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 1 / 4 / 2 / 5; }

.cadreDashboard {
  width: 100%;
  background-color: #F8FAFB;
  min-height: 150px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.btn_control {
  padding: 1em;
  width: 10em;
  margin-right: 1em;
  border-radius: 0.5em;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.btn_orange {
  background-color: #ffb631;
  border: 1px solid black;
  color: white;
}

.btn_white {
  background-color: white;
  border: 1px solid black;
  color: black;
}

.container__fluid {
  margin-left: 1em;
  margin-right: 1em;
  height: 100%;
}

.body__cadre_user {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  border-bottom: 1px solid #d0d2db;
  margin-bottom: 1em;
}

.parentMonnaie {
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 0.5em;
  margin-top: 1em;
  margin-bottom: 2em;
}

.parentMonnaie:hover {
  background-color: #7992f5;
  border-radius: 0.5em;
  color: white;
}

.divLogo {
  grid-area: 1 / 1 / 2 / 2;
}
.divContenu {
  grid-area: 1 / 2 / 2 / 3;
  padding: 0.5em;
}

.wallet_icon {
  padding: 1em;
  background-color: #d7d9e6;
  border-radius: 50%;
  margin-right: 0.5em;
}

.cadreTransaction {
  width: 100%;
  height: 350px;
  max-height: 350px;
  overflow-y: auto;
}

.parentTransaction {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 0.5em;
}

.divAuteur {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.divStatut {
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.divDate {
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.divMontant {
  grid-area: 1 / 4 / 2 / 5;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
