<script setup>
import { ref , computed } from 'vue';

const isFormValid = ref(true);
const name = ref('');
const email = ref('');
const phone = ref('');
const city= ref('');
const country = ref('');
const role_id = ref(GLOBAL_CONSTANTS.USER_ROLES_IDS.candidate);
const password = ref('');
const confirmPassword = ref('');

const isValidEmail = computed(() => {return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);});
const isValidPhone = computed(() => {return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone.value);});
const isPasswordConfirmed = computed(() => {return password.value == confirmPassword.value;});



function register() {
  isFormValid.value = true;

  if (!name.value || name.value == '') isFormValid.value = false;
  if (!isValidEmail.value) isFormValid.value = false;
  if (!isValidPhone.value) isFormValid.value = false;
  if (!city.value || city.value == '') isFormValid.value = false;
  if (!country.value || country.value == '') isFormValid.value = false;
  if (!password.value || password.value == '' || !isPasswordConfirmed.value) isFormValid.value = false;

  console.log(isFormValid.value);

  if (isFormValid.value == true) {
      console.log('registration....');

      let params = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        country: country.value,
        city: city.value,
        role_id: role_id.value, //TODO role_id не определяется ( может лучше переделать эту форму по аналогии с login)
        password: password.value,
      };

      console.log(params);

    // axios.post(`/api/auth/register`, params , {
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     }
    // ).then((response) => {
    //   console.log(response.data);
    //   alert(response.data.message);
    // })
    // .catch(function (error) {
    //   console.error(error);
    // });
  }
}
</script>


<template>
  <Header/>
  <Slider/>

  <div class="auth-forms">
    <transition name="fade"></transition>
    <div class="wallpaper-register"></div>
    <div class="container">

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <h1>Registration</h1><br/>
          <form class="form-group">
            <div>
              <input v-model="name" type="text" placeholder="Name">
              <div v-if="name == ''" class="error">Name is empty</div>
            </div>

            <div>
              <input v-model="email" type="text" placeholder="Email">
              <div v-if="!isValidEmail" class="error">invalid email address</div>
            </div>

            <div>
              <input v-model="phone" type="text" placeholder="Phone">
              <div v-if="!isValidPhone" class="error">invalid phone</div>
            </div>

            <div>
              <input v-model="city" type="text" placeholder="City">
              <div v-if="city == ''" class="error">City is empty</div>
            </div>

            <div>
              <input v-model="country" type="text" placeholder="Country">
              <div v-if="country == ''" class="error">Country is empty</div>
            </div>

            <div>
              <select v-model="role_id" class="wide" style="width: 100%; height: auto">
                <option v-for="(val, key) in GLOBAL_CONSTANTS.USER_ROLES_IDS" v-bind:value="val">{{key}}</option>
              </select>
            </div><br/><br/>

            <div>
              <input v-model="password" type="password" placeholder="Password">
              <div v-if="password == ''" class="error">Empty password</div>
            </div>

            <div>
              <input v-model="confirmPassword" type="password" placeholder="Confirm password">
              <div v-if="!isPasswordConfirmed" class="error">Passwords don't match</div>
            </div>
            <input type="submit" value="Registration" class="btn btn-primary" @click.prevent="register">
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


export default {
  name: "Registration",
  data() {
    return {
      GLOBAL_CONSTANTS: GLOBAL_CONSTANTS,
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
.auth-forms {
  margin: 5% auto;
}
</style>

