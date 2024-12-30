<template>
  <Header />
    <div class="job_listing_area plus_padding">
    <div class="container">
      <div class="row">

        <!-- filter  -->
        <ListFilter entity="vacancies" />

        <div class="col-lg-9">
          <div class="recent_joblist_wrap">
            <div class="recent_joblist white-bg ">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <h4>Vacancies</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="job_lists m-0" v-if="this.vacancies.data">
            <div class="row" v-for="(vacancy, index) in this.vacancies.data">
              <div class="col-lg-12 col-md-12">
                <div class="single_jobs white-bg d-flex justify-content-between">

                  <div class="jobs_left d-flex align-items-center">
                    <div class="thumb">
                      <img :src="require(`@/assets` + vacancy.company.user.image)">
                    </div>
                    <div class="jobs_conetent">
                      <a v-bind:href="'/vacancies/detail/' + vacancy.id"><h4>{{vacancy.title}}</h4></a>

                      <div class="location">
                        Salary from: <b>{{vacancy.salary_from}} $</b>
                      </div>

                      <div class="location">
                        <p>
                          <i class="fa fa-map-marker"></i>
                          {{vacancy.company.user.city}},
                          {{vacancy.company.user.country}}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="job_lists m-0" v-else>
            <div class="row" >
              <h4>Vacancies not found</h4>
            </div>
          </div>
        </div>

        <Pagination :entity_list="this.vacancies" v-on:getList="getVacancies"/>

      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Pagination from "./include/Pagination";
import { disablePreloader } from "/src/functions/helpers";
import axios from 'axios';
import ListFilter from "./filters/ListFilter";

export default {
  data: function(){
    return {
      token: localStorage.getItem('token'),
      role_name: localStorage.getItem('role_name'),
      related_entity_id: localStorage.getItem('related_entity_id'),
      vacancies: [],
      selected_job_category: 0,
      limit_page: 10,
      job_categories: [],
      selected_salary_from: '',
    }
  },
  methods:{
    getVacancies: function (page = 1) {
      //TODO перенести все в компонент!
      const job_category_id = this.$route.query.job_category_id;
      const salary_from = this.$route.query.salary_from;
      const filter = {};

      if (job_category_id != undefined) {
        this.selected_job_category = job_category_id;
        filter.job_category_id = job_category_id;
      }

      if (salary_from != undefined && salary_from != '') {
        this.selected_salary_from = salary_from;
        filter.salary_from = salary_from;
      }

      filter.page = page;
      filter.limit_page = this.limit_page;

      axios.get(`/api/vacancies/`, {
        params: filter,
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        this.vacancies = response.data.info.vacancies;
        disablePreloader();
      });
    },
    getGetJobCategories: function () {
      axios.get(`/api/entity-directories/job-categories`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        this.job_categories = response.data.info;
      });
    },
  },
  components: {
    ListFilter,
    Header,
    Footer,
    Pagination,
  },
  mounted(){
    this.getGetJobCategories();
    this.getVacancies();
  }
}
</script>
