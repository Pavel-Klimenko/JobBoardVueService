<template>
  <Header/>
  <Slider/>

  <div class="login-page">
    <transition name="fade"></transition>
    <div class="wallpaper-register"></div>
    <div class="container">

      <div class="row">
        <div v-if="authStatus == 'success'" class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <p>User {{email}} successfully authorized</p>
        </div>

        <div v-else-if="authStatus == 'error'" class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <h1>Login</h1><br/>
          <form class="form-group">
            <input v-model="email" type="email" class="form-control" placeholder="Email" required>
            <input v-model="password" type="password" class="form-control" placeholder="Password" required>
            <input type="submit" value="login" class="btn btn-primary" @click.prevent="login">
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>


<script>
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./homepage/Slider";

import axios from 'axios';

import {GLOBAL_CONSTANTS} from '/src/constants.js';

//TODO разобраться с Логином, глобально поподключать некоторые компоненты
//TODO прикрутить лоадер красивый

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      authStatus: 'error'
    }
  },
  methods: {
    validateForm(email, password) {
      let result = true;
      if (!email || !password) {
        result = false;
      }
      return result;
    },

    login() {
      if (!this.validateForm(this.email, this.password)) {
        alert('Fill Email and Password');
      } else {
        console.log('login....');
        axios.post(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/auth/login`, {
              email: this.email,
              password: this.password,
            }, {
              headers: {
                'Content-Type': 'application/json'
              }
            }
        ).then((response) => {
          console.log(response.data);

          let userId = response.data.user_id;

          localStorage.setItem("user_auth_" + userId, JSON.stringify({
            'user_id': userId,
            'token':response.data.token,
          }));

          this.authStatus = response.data.status

          if (response.data.status == 'error') {
            alert(response.data.message);
          }
        })
        .catch(function (error) {
          console.error(error);
        });
      }
    }
  },
  components: {
    Header,
    Footer,
    Slider,
  },
}
</script>

<style>
.login-page {
  margin: 5% auto;
}
</style>

