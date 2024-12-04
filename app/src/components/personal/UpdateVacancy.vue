<template>
  <Header/>
  <!--================Blog Area =================-->
  <section class="blog_area section-padding" v-if="vacancy">
    <div class="container">
      <div class="row">
        <h1 class="main_headings">Editing vacancy</h1>
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="blog_left_sidebar">
            <article class="blog_item">
              <div class="blog_details user-info">
                <div>
                  <p><b>Title:</b><br/><input class="personal_fields" type="text" v-model="vacancy.title"></p>

                  <p><b>Salary from:</b><br/><input class="personal_fields" type="number" v-model="vacancy.salary_from">
                  </p>
                  <p><b>Description:</b><br/>
                    <textarea v-model="vacancy.description"></textarea>
                  </p>
                </div>

                <div>
                  <p>
                    <b>Base technology:</b><br/>
                    <select class="personal_fields categories-list" v-model="selected_job_category">
                      <option selected disabled value="0">Job category</option>
                      <option v-for="category in job_categories" v-bind:value="category.id">{{ category.name }}</option>
                    </select>
                  </p>
                </div>
                <br/>
                <p><b>Active:</b><input class="personal_fields" type="checkbox" v-model="is_active_vacancy"></p>
              </div>

              <div class="blog_details" id="edit_personal_info">
                <a href="javascript:void(0);" type="button" class="btn btn-outline-success"
                   @click.prevent="updateVacancy">
                  Update
                </a>
              </div>
            </article>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog_right_sidebar">
            <!--              <CandidatePersonalNavPanel :candidate_id="this.$route.params.id"/>-->
          </div>
        </div>

      </div>
    </div>
  </section>
  <!--================Blog Area =================-->

  <Footer/>
</template>

<script>
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

import {GLOBAL_CONSTANTS} from '/src/constants.js';
//import { disablePreloader } from "/src/functions/helpers";
import axios from 'axios';

export default {
  data: function () {
    return {
      token: localStorage.getItem('token'),
      role_name: localStorage.getItem('role_name'),
      related_entity_id: localStorage.getItem('related_entity_id'),
      vacancy: false,
      job_categories: [
        {id: 1, name: 'java'},
        {id: 2, name: 'c'},
        {id: 3, name: 'c++'},
        {id: 4, name: 'c#'},
        {id: 5, name: 'python'},
        {id: 6, name: 'php'},
        {id: 7, name: 'javascript'},
        {id: 8, name: 'perl'},
        {id: 9, name: 'ruby'},
        {id: 10, name: 'assembler'},
        {id: 11, name: 'delphi'},
        {id: 12, name: 'swift'},
        {id: 13, name: 'go'},
        {id: 14, name: 'scala'},
        {id: 15, name: 'haskell'},
      ],
      is_active_vacancy: false,
      selected_job_category: 0,
    }
  },
  methods: {


    getMyVacancy: function () {
      axios.get(`/sanctum/csrf-cookie`).then(response => {
        axios.get(`/api/personal/company/my/vacancies/${this.$route.params.vacancy_id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }
        }).then((response) => {
          console.log(response);
          this.vacancy = response.data.info;
          this.is_active_vacancy = (this.vacancy.active == 1);
          this.selected_job_category = this.vacancy.job_category_id;

          // this.is_active_vacancy =


          // //disablePreloader();
          // this.info.candidate = this.candidate;
          // this.info.user = this.candidate.user;
          //
          // this.selected_candidate_level = this.candidate.level_id
          // this.selected_job_category = this.candidate.job_category_id
        });
      });
    },

    //TODO дублирующий код - функцию в одно место
    validateForm(title, salary_from, description, job_category_id) {
      let result = true;
      if (!title || title == '') result = false;
      if (!salary_from || salary_from == '') result = false;
      if (!description || description == '') result = false;
      if (!job_category_id || job_category_id == 0) result = false;

      return result;
    },

    updateVacancy: function () {
      if (!this.validateForm(this.vacancy.title, this.vacancy.salary_from, this.vacancy.description, this.vacancy.job_category_id)) {
        alert('Fill the vacancy form');
      } else {
        console.log('updating vacancy....');

        let params = {
          vacancy_id: this.$route.params.vacancy_id,
          title: this.vacancy.title,
          salary_from: this.vacancy.salary_from,
          description: this.vacancy.description,
          job_category_id: this.selected_job_category,
          active: (this.is_active_vacancy) ? 1 : 0,
        }

        axios.get(`/sanctum/csrf-cookie`).then(response => {
          axios.post(`/api/personal/company/update-vacancy`, params, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.token}`
            }
          }).then((response) => {
            console.log(response);
            if (response.data.status == 'ok') {
              //location.reload();
            }
            //disablePreloader();
          });
        });

      }
    }
  },

  components: {
    Header,
    Footer,
  },
  mounted() {
    this.getMyVacancy();
  }
}
</script>