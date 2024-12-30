<template>
  <Header />
    <!--================Blog Area =================-->
    <section class="blog_area section-padding">
      <div class="container" v-if="job_categories.length > 0">
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
import { disablePreloader, redirectToMyVacancyList } from "/src/functions/helpers";
import axios from 'axios';

export default {
  data: function() {
    return {
      token: localStorage.getItem('token'),
      role_name: localStorage.getItem('role_name'),
      related_entity_id: localStorage.getItem('related_entity_id'),
      selected_job_category: 0,
      info: {},
      job_categories: [],
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
      const jobCategoriesSelect = document.getElementById("jobCategoriesSelect");
      this.info.job_category_id = jobCategoriesSelect.value;

      if (!this.validateForm(this.info.title, this.info.salary_from, this.info.description, this.info.job_category_id)) {
        alert('Fill the vacancy form');
      } else {
        console.log('Creating new vacancy....');

        axios.get(`/sanctum/csrf-cookie`).then(response => {
            axios.post(`/api/personal/company/create-vacancy`,this.info, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
              }
            }).then((response) => {
              console.log(response);
              if (response.data.status == 'ok') {
                redirectToMyVacancyList(this.$route.params.id);
              }
            }).catch(error => {
              console.log(error);
            });

          });
      }
    },
    getGetJobCategories: function () {
      axios.get(`/api/entity-directories/job-categories`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        console.log(response.data.info);
        this.job_categories = response.data.info;
      });
    },
  },
  components: {
    Header,
    Footer,
    CompanyPersonalNavPanel
  },
  mounted() {
    this.getGetJobCategories();
    disablePreloader();
  }
}
</script>