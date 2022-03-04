<template>
  <div class="container__navigation_deux">

      <div class="navigation__deux_header">

          <div class="wallet_icon">
              <i class="fa-solid fa-wallet"></i>
          </div>
             Vos portefeuilles

      </div>
      <div class="navigation__deux_body">



      </div>

  </div>
  <div class="container__body">

    <div class="body__cadre_user">

        <img class="cadre_user_profil" src="https://ui-avatars.com/api/?name=Cyberghost&background=000000&color=fff&rounded=true&size=40" />

    </div>

    Network

    <!-- <div style="margin-left: 1em; margin-right: 1em; height: 100%">
      <div class="parent">
        <div class="div1">
          <div class="cardStat">
            <div class="card__colonneUn card_orange">
              <i class="fa-solid fa-circle-info" style="font-size: 4em"></i>
            </div>
            <div class="card__colonneDeux">
              <h2>{{ groupe }} GROUPE</h2>
            </div>
          </div>
        </div>
        <div class="div2">
          <div class="cardStat">
            <div class="card__colonneUn card_orange">
              <i class="fa-solid fa-circle-info" style="font-size: 4em"></i>
            </div>
            <div class="card__colonneDeux">
              <h2>{{ client }} CLIENTS</h2>
            </div>
          </div>
        </div>
        <div class="div3">
          <div class="cardStat">
            <div class="card__colonneUn card_orange">
              <i class="fa-solid fa-circle-info" style="font-size: 4em"></i>
            </div>
            <div class="card__colonneDeux">
              <h2>{{ manager }} MANAGER</h2>
            </div>
          </div>
        </div>
        <div class="div4">
          <div class="cardStat">
            <div class="card__colonneUn card_orange">
              <i class="fa-solid fa-circle-info" style="font-size: 4em"></i>
            </div>
            <div class="card__colonneDeux">
              <h2>{{ categorie }} CATEGORIES</h2>
            </div>
          </div>
        </div>
        <div class="div5">
          <div class="cardStat">
            <div class="card__colonneUn card_orange">
              <i class="fa-solid fa-circle-info" style="font-size: 4em"></i>
            </div>
            <div class="card__colonneDeux">
              <h2>{{ serveur }} SERVEURS</h2>
            </div>
          </div>
        </div>
        <div class="div6">
          <div class="cardStat">
            <div class="card__colonneUn card_orange">
              <i class="fa-solid fa-circle-info" style="font-size: 4em"></i>
            </div>
            <div class="card__colonneDeux">
              <h2>{{ channel }} CHANNELS</h2>
            </div>
          </div>
        </div>
        <div class="div7">
          <div class="cardStat">
            <div class="card__colonneUn card_orange">
              <i class="fa-solid fa-circle-info" style="font-size: 4em"></i>
            </div>
            <div class="card__colonneDeux">
              <h2>{{ campagne }} CAMPAGNES</h2>
            </div>
          </div>
        </div>
        <div class="div8"></div>
        <div class="div9"></div>
      </div>
    </div>-->

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

.body__cadre_user {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  border-bottom: 1px solid #D0D2DB;
  margin-bottom: 1em;
  margin-left: 1em;
  margin-right: 1em;
  padding: 1em;
}

.wallet_icon {
  padding: 1em;
  background-color: #D7D9E6;
  border-radius: 50%;
  margin-right: 0.5em;
}

.cardStat {
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
}

.card__colonneUn {
  flex: 0.8;
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card_orange {
  background-color: #f57f17;
}

.card_green {
  background-color: #388e3c;
}
.card_red {
  background-color: #d32f2f;
}

.card_blue {
  background-color: #1565c0;
}

.card__colonneDeux {
  flex: 2;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
