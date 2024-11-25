<template>
  <Header/>
  <Slider/>

  <div class="login-page">
    <transition name="fade"></transition>
    <div class="wallpaper-register"></div>
    <div class="container">

<!--      {{token}}-->

      <div class="row">
        <div v-if="token" class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <h2>User is already authorized</h2>
        </div>

        <div v-else class="col-lg-4 col-md-6 col-sm-8 mx-auto">
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

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      token: null,
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
        console.log('Login....');
        axios.get(`/sanctum/csrf-cookie`).then(response => {
          axios.post(`/api/auth/login`, {
                email: this.email,
                password: this.password,
              }, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }
          ).then((response) => {
            localStorage.setItem('token', response.data.token);
            this.token = response.data.token;
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            if (response.data.status == 'error') {
              alert(response.data.message);
            }
          }).catch(function (error) {
            console.error(error);
          });
        });
      }
    }
  },
  components: {
    Header,
    Footer,
    Slider,
  },
  mounted(){
    this.token = localStorage.getItem('token');
  }
}
</script>

<style>
.login-page {
  margin: 5% auto;
}
</style>

