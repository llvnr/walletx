<template>

    <div class="container__body body_grey">

      <div class="body__container_login">

        <div class="content_login">

          <label>Email : </label> <br>
          <br>
          <div class="input-group">
            <input type="text" placeholder="Username" v-model="name">
            <span class="input-group-addon">
              @ghostfox.net
            </span>
          </div><br>
          <p v-if="error == 'Unauthorized'">Error, unable to connect with these credentials.</p>
          <!-- <p v-else>Error, unable to connect with these credentials.</p> -->
          <label>Password : </label> <br>
          <input type="password" class="form-control" v-model="password"> <br>
          <br>
          <button class="btn" @click="login()">Connexion</button>

        </div>

      </div>

    </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "Connexion",
  data() {
    return {
        name: '',
        password: '',
        success: false,
        has_error: false,
        error: ''
    }
  },
  components: {
  },
  methods: {
    login() {

      let formdata = new FormData();
      formdata.append("name", this.name);
      formdata.append("password", this.password);

      let requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch("http://192.168.223.136:8000/api/auth/login", requestOptions)
        .then(response => response.text())
        .then(result => {
          let resultat = JSON.parse(result)
          if(resultat.error == "Unauthorized"){
            this.error = "Unauthorized"
            setTimeout(() => {
              this.error = ""
            }, 1500);
          } else {
            this.name = ""
            this.password = ""
            localStorage.setItem("token", resultat.access_token)
            window.location.href = "/"
            // this.$router.push({ name: 'Dashboard' });
            // console.log(resultat)
          }
        })
        .catch(error => console.log('error', error));

    }
  }
};
</script>

<style>

.input-group {
  display: flex;
  align-content: stretch;
}

.input-group > input {
  flex: 1 0 auto;
}

.input-group-addon {
  background: #eee;
  border: 1px solid #ccc;
  padding: 0.5em 1em;
}

.body_grey {
  background-color: #F8FAFB;
}

.body__container_login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.content_login {
  width: 50%;
}

.form-control {
  width: 100%;
  height: 2em;
  margin-top: 1em;
  margin-bottom: 1em;
}

.btn {
  width: 100%;
  height: 2em;
}

</style>
