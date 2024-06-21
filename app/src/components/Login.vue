<template>
  <Header />

    <div class="login-page">
      <transition name="fade">
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
              <h1>Login</h1>
              <form class="form-group">
                <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                <input type="submit" value="login" class="btn btn-primary" @click.prevent="login">
              </form>
            </div>
          </div>
        </div>

      </div>
  <Footer />
</template>


<script>
import Header from "./Header";
import Footer from "./Footer";

import axios from 'axios';

import {GLOBAL_CONSTANTS} from '/src/constants.js';

//TODO разобраться с Логином, глобально поподключать некоторые компоненты

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login() {
      axios.get(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/sanctum/csrf-cookie`).then(() => {
        axios.post(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/login`, {
              email: this.email,
              password: this.password,
            }).then((response) => {
              console.log(response.data);
            })
            .catch(function (error) {
              console.error(error);
            });
      });
    }
  },
  components: {
    Header,
    Footer,
  },
}
</script>

