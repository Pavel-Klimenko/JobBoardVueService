<script setup>
import { ref , computed } from 'vue';

const startValidation = ref(false);

const EMAIL = ref('');
const password = ref('');
const confirmPassword = ref('');

function register() {
  startValidation.value = true;

  if (isValidEmail.value == true && isStrongPassword.value == true && isPasswordConfirmed.value == true ) {
    // send data to api here
    alert("registering...");
  }
}

const isValidEmail = computed(() => {
  return startValidation.value ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EMAIL.value) : null;
});

const isStrongPassword = computed(() => {
  return startValidation.value ? /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password.value) : null;
});



const isPasswordConfirmed = computed(() => {
  return startValidation.value ? password.value == confirmPassword.value : null;
});
</script>


<template>
  <Header/>
  <Slider/>

  <div class="login-page">
    <transition name="fade"></transition>
    <div class="wallpaper-register"></div>
    <div class="container">

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <h1>Register</h1><br/>
          <form class="form-group">
<!--            <input v-model="NAME" type="text" class="form-control" placeholder="NAME" required>-->
<!--            <input v-model="EMAIL" type="email" class="form-control" placeholder="EMAIL" required>-->

            <input :class="{ valid : isValidEmail == true , inValid : isValidEmail == false}" v-model="EMAIL" type="text" placeholder="EMAIL">
            <div v-if="startValidation && !isValidEmail" class="error">invalid email address</div>
            <br>

            <input  v-model="password" type="password" placeholder="Password"> <br>
            <div v-if="startValidation && password == ''" class="error">Empty password</div>
            <br>


<!--            <input v-model="PHONE" type="text" class="form-control" placeholder="PHONE" required>-->
<!--            <input v-model="COUNTRY" type="text" class="form-control" placeholder="COUNTRY" required>-->
<!--            <input v-model="CITY" type="text" class="form-control" placeholder="CITY" required>-->

<!--            <select v-model="ROLE" class="wide">-->
<!--              <option v-for="role in GLOBAL_CONSTANTS.USER_ROLES" v-bind:value="role">{{role}}</option>-->
<!--            </select><br/><br/>-->






            <input v-model="confirmPassword" type="password" class="form-control" placeholder="CONFIRM PASSWORD" required>
            <input type="submit" value="Register" class="btn btn-primary" @click.prevent="register">
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
.error {
  color: red;
}
.valid {
  background-size: auto 100%;
}
.inValid {
  background-size: auto 100%;
}
</style>


<script>
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./homepage/Slider";

import axios from 'axios';

import {GLOBAL_CONSTANTS} from '/src/constants.js';

//TODO разобраться с Логином, глобально поподключать некоторые компоненты
//TODO прикрутить лоадер красивый

//
// 'NAME' => $data['NAME'],
//     'EMAIL' => $data['email'],
//     'PHONE' => $data['email'],
//     'COUNTRY' => $data['email'],
//     'CITY' => $data['email'],
//     'role_id' => $data['email'],
//     'EMAIL' => $data['email'],
//     'password' => Hash::make($data['password']),


export default {
  name: "Register",
  data() {
    return {
      NAME: null,
      EMAIL: null,
      PHONE: null,
      COUNTRY: null,
      CITY: null,
      ROLE: GLOBAL_CONSTANTS.USER_ROLES.candidate,
      password: null,
      password_confirmation: null,

      GLOBAL_CONSTANTS: GLOBAL_CONSTANTS,
    }
  },
  methods: {
    // validateForm(email, password) {
    //   let result = true;
    //   if (!email || !password) {
    //     result = false;
    //   }
    //   return result;
    // },

    register() {

      console.log('registration....');

      console.log(this.NAME);
      console.log(this.EMAIL);
      console.log(this.PHONE);
      console.log(this.COUNTRY);
      console.log(this.CITY);
      console.log(this.ROLE);
      console.log(this.password);
      console.log(this.password_confirmation);
      console.log(this.NAME);

      // if (!this.validateForm(this.email, this.password)) {
      //   alert('Fill all register form fields');
      // } else {
      //   axios.post(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/auth/login`, {
      //         email: this.email,
      //         password: this.password,
      //       }, {
      //         headers: {
      //           'Content-Type': 'application/json'
      //         }
      //       }
      //   ).then((response) => {
      //     console.log(response.data);
      //     this.authStatus = response.data.status
      //
      //     if (response.data.status == 'error') {
      //       alert(response.data.message);
      //     }
      //   })
      //       .catch(function (error) {
      //         console.error(error);
      //       });
      // }
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
.error {
  text-transform: capitalize;
}
</style>

