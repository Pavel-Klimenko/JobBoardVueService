<template>
  <Header/>
  <Slider/>

  <div class="login-page">
    <transition name="fade"></transition>
    <div class="wallpaper-register"></div>
    <div class="container">

      <div class="row">
        <div v-if="token !== undefined && token" class="col-lg-4 col-md-6 col-sm-8 mx-auto">
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
import {disablePreloader, setAuthData} from "/src/functions/helpers";
import axios from 'axios';

//TODO разобраться с Логином, глобально поподключать некоторые компоненты

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      token: localStorage.getItem('token'),
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
             console.log(response);

            if (response.data.status == 'error') {
                alert(response.data.message);
            } else if (response.data.status == 'ok') {
                setAuthData(
                    response.data.info.token,
                    response.data.info.user_id,
                    response.data.info.role_name,
                    response.data.info.related_entity_id
                );
                location.reload();
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
  mounted() {
    disablePreloader();
  }
}
</script>

<style>
.login-page {
  margin: 5% auto;
}
</style>

