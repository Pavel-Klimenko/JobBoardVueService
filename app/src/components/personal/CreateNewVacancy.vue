<template>
  <Header />
    <!--================Blog Area =================-->
    <section class="blog_area section-padding">
      <div class="container">
        <div class="row">
          <h1 class="main_headings">Create new vacancy</h1>
          <div class="col-lg-8 mb-5 mb-lg-0">
            <div class="blog_left_sidebar">
              <article class="blog_item">
                <div class="blog_details user-info">
                  <div>
                    <p><b>Title:</b><br /><input class="personal_fields" type="text" v-model="info.title"></p>
                    <p><b>Salary from:</b><br /><input class="personal_fields" type="number" v-model="info.salary_from"></p>
                    <p><b>Description:</b><br />
                      <textarea v-model="info.description"></textarea>
                    </p>
                  </div>

                  <div>

                    <p>
                      <b>Base technology:</b><br />
                      <select class="personal_fields categories-list" v-model="selected_job_category" id="jobCategoriesSelect">
                        <option selected disabled value="0">Job category</option>
                        <option v-for="category in job_categories" v-bind:value="category.id">{{ category.name }}</option>
                      </select>
                    </p>

                  </div>
                </div>

                <div class="blog_details" id="edit_personal_info">
                  <a href="javascript:void(0);" type="button" class="btn btn-outline-success" @click.prevent="createVacancy">
                    Create
                  </a>
                </div>
              </article>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="blog_right_sidebar">
              <CompanyPersonalNavPanel :company_id="this.$route.params.id"/>
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
import CompanyPersonalNavPanel from "/src/components/include/CompanyPersonalNavPanel";

import {GLOBAL_CONSTANTS} from '/src/constants.js';
//import { disablePreloader } from "/src/functions/helpers";
import axios from 'axios';

export default {
  data: function() {
    return {
      selected_job_category: 0,
      info: {},
      job_categories: [
        {id:1, name:'java'},
        {id:2, name:'c'},
        {id:3, name:'c++'},
        {id:4, name:'c#'},
        {id:5, name:'python'},
        {id:6, name:'php'},
        {id:7, name:'javascript'},
        {id:8, name:'perl'},
        {id:9, name:'ruby'},
        {id:10, name:'assembler'},
        {id:11, name:'delphi'},
        {id:12, name:'swift'},
        {id:13, name:'go'},
        {id:14, name:'scala'},
        {id:15, name:'haskell'},
      ],
    }
  },
  methods: {
    validateForm(title, salary_from, description, job_category_id) {
      let result = true;
      if (!title || !salary_from || !description) {
        if (!job_category_id || job_category_id == 0) {
          result = false;
        }
      }
      return result;
    },
    createVacancy: function () {
      const jobCategoriesSelect = document.getElementById("jobCategoriesSelect");// выбираем элемент select
      this.info.job_category_id = jobCategoriesSelect.value;

      if (!this.validateForm(this.info.title, this.info.salary_from, this.info.description, this.info.job_category_id)) {
        alert('Fill the vacancy form');
      } else {
        console.log('creating new vacancy....');

        axios.get(`/sanctum/csrf-cookie`).then(response => {
            axios.post(`/api/company/my/vacancies/create`,this.info, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+'42|yrekdbmevj5CpjdOa1AiSLhkQtwi34WbiupLjFMF'
              }
            }).then((response) => {
              console.log(response);
              if (response.data.status == 'ok') {
                //location.reload();
              }
              //disablePreloader();
              // this.candidate = response.data.info.candidate;
              // console.log(this.candidate);
              //disablePreloader();
            }).catch(error => {
              console.log(error);
            });

          });
      }
    },
  },
  components: {
    Header,
    Footer,
    CompanyPersonalNavPanel
  },
}
</script>