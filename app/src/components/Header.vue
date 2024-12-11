<template>
  <header>
    <div class="header-area ">
      <div id="sticky-header" class="main-header-area sticky">
        <div class="container-fluid ">
          <div class="header_bottom_border">
            <div class="row align-items-center">
              <div class="col-xl-3 col-lg-2">
                <div class="logo">
                </div>
              </div>
              <div class="col-xl-6 col-lg-7">
                <div class="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><a href="/">Home</a></li>
                      <li><a href="/vacancies">Vacancies</a></li>
                      <li><a href="/candidates">Candidates</a></li>

<!--                      <li><a href="javascript:void(0);">Contact <i class="ti-angle-down"></i></a>-->
<!--                        <ul class="submenu">-->
<!--                          <li class="main-menu-contact"><a href="/contact">Contact</a></li>-->
<!--                          <li><a href="/add-review">Add review</a></li>-->
<!--                        </ul>-->
<!--                      </li>-->

                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                <div class="Appointment">


                  <div class="phone_num d-none d-xl-block" v-if="token">
                    <a :href="getPersonalArealLink()">Personal</a>
                  </div>

                  <div class="phone_num d-none d-xl-block">
                    <a href="javascript:void(0);" v-if="token" @click.prevent="logout">Logout</a>
                    <a href="/login/" v-else>Login</a>
                  </div>
                  <div class="d-none d-lg-block">
                    <a class="boxed-btn3" href="/register/">Register</a>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

import axios from 'axios';
import {disablePreloader, setAuthData, removeAuthData, redirectToMainPage} from "/src/functions/helpers";

//TODO разобраться с Логином, глобально поподключать некоторые компоненты

export default {
  name: "Login",
  data() {
    return {
      token: localStorage.getItem('token'),
      role_name: localStorage.getItem('role_name'),
      related_entity_id: localStorage.getItem('related_entity_id'),
    }
  },
  methods: {
    logout() {
      console.log('Logout....');
      axios.get(`/sanctum/csrf-cookie`).then(response => {
        axios.post(`/api/auth/logout`, {}, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
              }
            }
        ).then((response) => {
          console.log(response);
          if (response.data.info.status == 'success') {
            removeAuthData();
            redirectToMainPage();
          }
        }).catch(function (error) {
          console.error(error);
        });
      });
    },
    getPersonalArealLink() {
      let personaAreaLink = '';
      if (this.token !== undefined && this.token !== '') {
        personaAreaLink = '/personal/' + this.role_name + '/' + this.related_entity_id;
      }
      return personaAreaLink;
    }
  },
  mounted(){
    this.token = localStorage.getItem('token');


  }
}
</script>

