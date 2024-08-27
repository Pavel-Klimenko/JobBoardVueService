<template>
  <Header />
    <div class="job_listing_area plus_padding">
    <div class="container">
      <div class="row">

        <!-- filter  -->
        <div class="col-lg-3">
          <div class="job_filter white-bg">
            <div class="form_inner white-bg">
              <h3>FILTER VACANCIES</h3>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="single_field">
                      <select class="categories-list" name="job_category_id" v-model="selected_job_category">
                        <option selected disabled value="0">Job category</option>
                        <option v-for="category in job_categories" v-bind:value="category.id">{{category.name}}</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="single_field">
                      <input type="number" name="salary_from" v-model="selected_salary_from" placeholder="Salary from, $">
                    </div>
                  </div>
                </div>

                <div class="reset_btn">
                  <button class="boxed-btn3 w-100" type="submit">Filter results</button>
                </div> <br />

                <div class="reset_btn">
                  <a href="/vacancies" class="btn btn-outline-danger">Reset filter</a>
                </div>

              </form>
            </div>
          </div>
        </div>

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
                      <img :src="svgIcon2" :alt="svgIcon2">
                    </div>
                    <div class="jobs_conetent">
                      <a href="#"><h4>{{vacancy.title}}</h4></a>
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

        <!-- pagination  -->
        <!--TODO перенести pagination в отдельный компонент-->
        <div v-if="this.vacancies.data && this.vacancies.last_page > 1">
          <div class="row">
            <div class="col-lg-12">
              <div class="pagination_wrap">
                <ul>
                  <li v-if="this.vacancies.current_page !== 1">
                    <a href="javascript:void(0);" @click.prevent="getVacancies(1)" rel="prev" aria-label="#previousPageUrl"><i class="ti-angle-left"></i></a>
                  </li>

                  <li v-if="this.vacancies.prev_page_url && this.vacancies.current_page - 1 !== 1">
                    <a href="javascript:void(0);" @click.prevent="getVacancies(this.vacancies.current_page - 1)"><span>{{this.vacancies.current_page - 1 }}</span></a>
                  </li>

                  <li class="active" aria-current="page">
                    <a><span><b>{{this.vacancies.current_page}}</b></span></a>
                  </li>

                  <li v-if="this.vacancies.next_page_url && this.vacancies.current_page + 1 !== this.vacancies.last_page">
                    <a href="javascript:void(0);" @click.prevent="getVacancies(this.vacancies.current_page + 1)"><span>{{this.vacancies.current_page + 1}}</span></a>
                  </li>

                  <li v-if="this.vacancies.current_page !== this.vacancies.last_page">
                    <a href="javascript:void(0);" @click.prevent="getVacancies(this.vacancies.last_page)" rel="next" aria-label="#nextPageUrl"><i class="ti-angle-right"></i></a>
                  </li>

                </ul>
                <p>Total pages:  <u>{{this.vacancies.total}}</u></p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import {GLOBAL_CONSTANTS} from '/src/constants.js';
import axios from 'axios';

export default {
  data: function(){
    return {
      vacancies: [],
      selected_job_category: 0,
      limit_page: 1,
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

      axios.get(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/vacancies/`, {
        params: filter,
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        this.vacancies = response.data.info.vacancies;
      });
    }
  },
  components: {
    Header,
    Footer,
  },
  computed: {
    //TODO программное получение ссылок на эти иконки
    svgIcon2() {
      return require(`@/assets/img/svg_icon/2.svg`);
    },
    svgIcon5() {
      return require(`@/assets/img/svg_icon/5.svg`);
    },
  },
  mounted(){
    this.getVacancies();
  }
}
</script>
