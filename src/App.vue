<template>
  <div class="container">

    <div class="container__navigation">

        <div class="navigation__header">

            <div>
            <small>Account balance</small>
            <h1>2,080 GHX</h1>
            </div>

        </div>

        <div class="navigation__body">

            <ul class="v-effect-link">

              <li><router-link class="test" to="/"><i class="fa-solid fa-gauge"></i> Dashboard</router-link></li>
              <li><router-link class="test" to="/wallet"><i class="fa-solid fa-wallet"></i> Wallet</router-link></li>
              <li><router-link class="test" to="/network"><i class="fa-brands fa-buffer"></i> Network</router-link></li>
              <li><div><i class="fa-solid fa-arrow-right-from-bracket"></i> Déconnexion</div></li>
              <li><router-link class="test" to="/connexion"><i class="fa-solid fa-arrow-right-to-bracket"></i> Connexion</router-link></li>
            
            </ul>

        </div>
        <div class="navigation__footer">

            <ul class="v-effect-link">
              <li><router-link class="test" to="/settings"><i class="fa-solid fa-gear"></i> Settings</router-link></li>
              <li><router-link class="test" to="/"><i class="fa-brands fa-discord"></i> Discord</router-link></li>
              <li><router-link class="test" to="/"><i class="fa-brands fa-github"></i> Github</router-link></li>
              <li><router-link class="test" to="/help"><i class="fa-solid fa-circle-info"></i> A propos</router-link></li>
            </ul>

        </div>

    </div>

    <router-view/>

  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "App",
  components: {},
};
</script>

<style>

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.test {
  text-decoration: none;
  color: black;
}

.container {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

.container__navigation {
  flex: 1.2;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.container__navigation_deux {
  flex: 1.3;
  background-color:#F8FAFB;
  display: flex;
  flex-direction: column;
}

.navigation__deux_header {
  flex: 1;
  border-bottom: 1px solid #D0D2DB;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation__deux_footer {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation__deux_body {
  flex: 8;
  height: 100%;
  overflow-y: auto;
}

.navigation__header {
  flex: 2;
  margin-top: 4em;
  margin-left: 1em;
}

.navigation__body {
  flex: 7;
}

.navigation__footer {
  flex: 3;
  display: grid;
  align-items: flex-end;
}

.v-effect-link {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.v-effect-link li {
  min-width: 100%;
  margin: 0em 0em;
  padding: 1em;
}

.v-effect-link li:hover {
  min-width: 100%;
  margin: 0em 0em;
  padding: 1em;
  border-bottom: 1px solid #E4E4E4;
  background-color: #F2F2F2;
}

.container__body {
  flex: 6;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  margin-left: 1em;
  margin-right: 1em;
}

.body__content_card {
  width: 100%;
  min-height: 10em;
  background-color: #E4E4E5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
}

</style>
