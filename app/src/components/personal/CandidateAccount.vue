<template>
  <Header />
    CANDIDATE PERSONAL ACCOUNT CANDIDATE ID: {{ $route.params.id }}

  <!--================Blog Area =================-->
  <section class="blog_area section-padding">
    <div class="container">
      <div class="row">

        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="blog_left_sidebar">

            <article class="blog_item">

              <div class="blog_item_img">
                <img class="card-img rounded-0" width="750" src="IMAGE" alt="">
              </div>

              <div class="blog_details">
                forms.uploadImage!!!
              </div>



              <div class="blog_details user-info">
                <div v-if="info.user">
                  <p><b>NAME:</b><br /><input class="personal_fields" type="text" v-model="info.user.name"></p>
                  <p><b>COUNTRY:</b><br /><input class="personal_fields" type="text" v-model="info.user.country"></p>
                  <p><b>CITY:</b><br /><input class="personal_fields" type="text" v-model="info.user.city"></p>
                  <p><b>PHONE:</b><br /><input class="personal_fields" type="text" v-model="info.user.phone"></p>
                </div>

                <div v-if="info.candidate">
                  <p><b>BASE TECHNOLOGY:</b><br />
                    <input class="personal_fields" type="text" v-model="info.candidate.job_category.name">
                    <input type="hidden" v-model="info.candidate.job_category.id">
                  </p>

                  <p><b>LEVEL:</b><br />
                    <input class="personal_fields" type="text" v-model="info.candidate.level.code">
                    <input type="hidden" v-model="info.candidate.level.id">
                  </p>

                  <p><b>YEARS EXPERIENCE:</b><br /><input class="personal_fields" type="number" v-model="info.candidate.years_experience"></p>
                  <p><b>SALARY:</b><br /><input class="personal_fields" type="text" v-model="info.candidate.salary"></p>
                  <p><b>EXPERIENCE:</b><textarea v-model="info.candidate.experience">{{info.candidate.experience}}</textarea></p><br />
                  <p><b>EDUCATION:</b><textarea v-model="info.candidate.education">{{info.candidate.education}}</textarea></p><br />
                  <p><b>ABOUT ME:</b><textarea v-model="info.candidate.about_me">{{info.candidate.about_me}}</textarea></p><br />
                </div>
              </div>

              <div class="blog_details edit-form" style="display: none">
                personal.inc.edit-forms.editCandidate
              </div>

              <div class="blog_details" id="edit_personal_info">
                <a href="javascript:void(0);" type="button" class="btn btn-outline-success" @click.prevent="updatePersonalInfo">
                  Update personal info
                </a>
              </div>
            </article>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog_right_sidebar">
            include personal.aside

            <aside class="single_sidebar_widget post_category_widget">
              <h4 class="widget_title">$title</h4>
              <ul class="list cat-list">
                <li>
                  <a href="personal-info" class="d-flex">
                    <p>Personal info</p>
                  </a>
                </li>

                <li>
                  <a href="interview-requests - all" class="d-flex">
                    <p><b>All interview requests</b></p>
                  </a>
                </li>
                <li>
                  <a href="interview-requests type - accepted" class="d-flex">
                    <p><b>Accepted interview requests</b></p>
                  </a>
                </li>
              </ul>
            </aside>

          </div>
        </div>

      </div>
    </div>
  </section>
  <!--================Blog Area =================-->


  <Footer />
</template>

<script>
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

import {GLOBAL_CONSTANTS} from '/src/constants.js';
//import { disablePreloader } from "/src/functions/helpers";
import axios from 'axios';

export default {
  data: function(){
    return {
      info: {}
    }
  },
  methods:{
    getCandidate: function () {
      axios.get(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/personal/candidate/${this.$route.params.id }`, {
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': 'Bearer '+"13|byyzWeCDcIa32PgEGtjfHlMbm6Qy4wwF4yYX382C"
        }
      }).then((response) => {
        this.candidate = response.data.info.candidate;
        console.log(this.candidate);
        //disablePreloader();
        this.info.candidate = this.candidate;
        this.info.user = this.candidate.user;
      });
    },

    updatePersonalInfo: function () {

      let params =  {
            candidate_id: parseInt(this.$route.params.id),
            user_id: this.info.user.id,

            name: this.info.user.name,
            country: this.info.user.country,
            city: this.info.user.city,
            phone: this.info.user.phone,

            job_category_id: this.info.candidate.job_category.id,
            level_id: this.info.candidate.level.id,
            years_experience: this.info.candidate.years_experience,
            salary: this.info.candidate.salary,
            experience: this.info.candidate.experience,
            education: this.info.candidate.education,
            about_me: this.info.candidate.about_me,
      }

      console.log(params);

      axios.post(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/personal/candidate/update`, params, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response);
        if (response.data.status == 'ok') {
          location.reload();
        }
        //disablePreloader();
      });

    }
  },
  components: {
    Header,
    Footer,
  },
  mounted(){
    this.getCandidate();
  }
}
</script>

<style>
  .personal_fields {
    width: 50% !important;
  }
</style>