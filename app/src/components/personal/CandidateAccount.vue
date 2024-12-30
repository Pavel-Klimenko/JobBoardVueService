<template>
  <Header />

  <!--================Blog Area =================-->
  <section class="blog_area section-padding" v-if="info.user">
    <div class="container" v-if="job_categories.length > 0 && candidates_levels.length > 0">
      <div class="row">
        <h1 class="main_headings">My Personal info</h1>
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="blog_left_sidebar">
            <article class="blog_item">
              <div class="blog_details user-info">
                <div>
                  <p><b>NAME:</b><br /><input class="personal_fields" type="text" v-model="info.user.name"></p>
                  <p><b>COUNTRY:</b><br /><input class="personal_fields" type="text" v-model="info.user.country"></p>
                  <p><b>CITY:</b><br /><input class="personal_fields" type="text" v-model="info.user.city"></p>
                  <p><b>PHONE:</b><br /><input class="personal_fields" type="text" v-model="info.user.phone"></p>
                </div>

                <div v-if="info.candidate">


                  <p><b>BASE TECHNOLOGY:</b><br />
                    <select class="personal_fields categories-list" name="job_category_id" v-model="selected_job_category">
                      <option selected disabled value="0">Job category</option>
                      <option v-for="category in job_categories" v-bind:value="category.id">{{ category.name }}</option>
                    </select>
                  </p>

                  <p><b>LEVEL:</b><br />
                    <select class="personal_fields sorting-list"  v-model="selected_candidate_level">
                      <option selected disabled value="0">Level</option>
                      <option v-for="level in candidates_levels" v-bind:value="level.id">{{ level.code }}</option>
                    </select>
                  </p>

                  <p><b>YEARS EXPERIENCE:</b><br /><input class="personal_fields" type="number" v-model="info.candidate.years_experience"></p>
                  <p><b>SALARY:</b><br /><input class="personal_fields" type="text" v-model="info.candidate.salary"></p>
                  <p><b>EXPERIENCE:</b><textarea v-model="info.candidate.experience">{{info.candidate.experience}}</textarea></p><br />
                  <p><b>EDUCATION:</b><textarea v-model="info.candidate.education">{{info.candidate.education}}</textarea></p><br />
                  <p><b>ABOUT ME:</b><textarea v-model="info.candidate.about_me">{{info.candidate.about_me}}</textarea></p><br />
                </div>
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
            <CandidatePersonalNavPanel :candidate_id="this.$route.params.id"/>
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
import CandidatePersonalNavPanel from "/src/components/include/CandidatePersonalNavPanel";
import { disablePreloader } from "/src/functions/helpers";
import axios from 'axios';

export default {
  data: function(){
    return {
      token: localStorage.getItem('token'),
      role_name: localStorage.getItem('role_name'),
      related_entity_id: localStorage.getItem('related_entity_id'),
      info: {},
      selected_job_category: 0,
      job_categories: [],
      selected_candidate_level: 0,
      candidates_levels: [],
    }
  },
  methods:{
    getGetJobCategories: function () {
      axios.get(`/api/entity-directories/job-categories`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        this.job_categories = response.data.info;
      });
    },
    getCandidateLevels: function () {
      axios.get(`/api/entity-directories/candidate-levels`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        this.candidates_levels = response.data.info;
      });
    },
    getCandidate: function () {
      axios.get(`/sanctum/csrf-cookie`).then(response => {
        axios.get(`/api/personal/candidate/${this.$route.params.id }`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }
        }).then((response) => {
          this.candidate = response.data.info.candidate;
          // console.log(this.candidate);
          // console.log(this.candidate.level_id);
          // console.log(this.candidate.job_category_id);

          this.info.candidate = this.candidate;
          this.info.user = this.candidate.user;
          this.selected_candidate_level = this.candidate.level_id;
          this.selected_job_category = this.candidate.job_category_id;

          disablePreloader();
        });
      });
    },
    updatePersonalInfo: function () {
      let params =  {
            name: this.info.user.name,
            country: this.info.user.country,
            city: this.info.user.city,
            phone: this.info.user.phone,
            job_category_id: this.selected_job_category,
            level_id: this.selected_candidate_level,
            years_experience: this.info.candidate.years_experience,
            salary: this.info.candidate.salary,
            experience: this.info.candidate.experience,
            education: this.info.candidate.education,
            about_me: this.info.candidate.about_me,
      }

      console.log(params);

      console.log('Updating personal info....');

      axios.get(`/sanctum/csrf-cookie`).then(response => {
        axios.post(`/api/personal/candidate/update`, params, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${this.token}`
          }
        }).then((response) => {
          console.log(response);
          if (response.data.status == 'ok') {
            location.reload();
          }
        });
      });

    }
  },
  components: {
    Header,
    Footer,
    CandidatePersonalNavPanel
  },
  mounted(){
    this.getCandidate();
    this.getGetJobCategories();
    this.getCandidateLevels();
  }
}
</script>

<style>
  .personal_fields {
    width: 50% !important;
  }
</style>