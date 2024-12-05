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
            </div>
            <div>
              <input v-model="email" type="text" placeholder="Email">
            </div>
            <div>
              <input v-model="phone" type="text" placeholder="Phone">
            </div>
            <div>
              <input v-model="city" type="text" placeholder="City">
            </div>
            <div>
              <input v-model="country" type="text" placeholder="Country">
            </div>
            <div>
              <select class="wide" style="width: 100%; height: auto" id="selectedUserRole">
                <option v-for="role in user_roles" v-bind:value="role.id">{{ role.name }}</option>
              </select>
            </div><br/><br/>
            <div>
              <input v-model="password" type="password" placeholder="Password">
            </div>
            <div>
              <input v-model="confirmPassword" type="password" placeholder="Confirm password">
            </div>

            <input type="submit" value="Registration" class="btn btn-primary" @click.prevent="registerNewUser">
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
      token: localStorage.getItem('token'),
      role_name: localStorage.getItem('role_name'),
      related_entity_id: localStorage.getItem('related_entity_id'),

      name: null,
      email:null,
      phone:null,
      city:null,
      country:null,
      password:null,
      confirmPassword:null,
      selected_user_role_id: 2,
      user_roles: [
        {id:2, name:'company'},
        {id:3, name:'candidate'},
      ],
    }
  },
  methods: {
    validateForm(form) {
      let result = true;
      if (!form.name || !form.email || !form.phone || !form.city) result = false;
      if (!form.country || !form.password || !form.confirmPassword) result = false;
      if (form.password !== form.confirmPassword) result = false;

      return result;
    },

    registerNewUser() {
      if (!this.validateForm(this)) {
        alert('Fill the registration form. Passwords have to be the same.');
      } else {
        const selectedUserRole = document.getElementById("selectedUserRole");// выбираем элемент select
        this.selected_user_role_id = parseInt(selectedUserRole.value);

        let params = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          country: this.country,
          city: this.city,
          role_id: this.selected_user_role_id,
          password: this.password,
        };

        console.log(params);
        console.log('Registration....');

        axios.get(`/sanctum/csrf-cookie`).then(response => {
          axios.post(`/api/auth/register`, params , {
                headers: {'Content-Type': 'application/json'}
              }
          ).then((response) => {
            console.log(response.data);
            alert(response.data.message);
          })
            .catch(function (error) {
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
}
</script>

<style>
.auth-forms {
  margin: 5% auto;
}
</style>

