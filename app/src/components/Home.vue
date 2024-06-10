<template>
  <Header />
  <!--      <Slider />-->
        <FindJob />

<!--    <div class="popular_category_area" v-if="this.homePageData.job_categories">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-lg-12">-->
<!--          <div class="section_title mb-40">-->
<!--            <h3>Job Categories</h3>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row">-->
<!--        <div class="col-lg-4 col-xl-3 col-md-6" v-for="(category, index) in this.homePageData.job_categories">-->
<!--          <div class="single_catagory">-->
<!--            <a :href="`/browse-job?CATEGORY_ID=${category.ID}`">-->
<!--              <h4>{{category.NAME}}</h4>-->
<!--            </a>-->
<!--            <p><span>{{category.QUANTITY_OF_VACANCIES}}</span> Available positions</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->


    <div class="job_listing_area" v-if="this.homePageData.vacancies">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="section_title">
              <h3>Job Listing</h3>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="brouse_job text-right">
              <a href="#" class="boxed-btn4">Browse More Job</a>
            </div>
          </div>
        </div>
        <div class="job_lists">
          <div class="row">
            <div class="col-lg-12 col-md-12" v-for="(vacancy, index) in this.homePageData.vacancies">
              <div class="single_jobs white-bg d-flex justify-content-between">
                <div class="jobs_left d-flex align-items-center">
                  <div class="thumb">
                    <img :src="svgIcon" :alt="svgIcon">
                  </div>
                  <div class="jobs_conetent">
                    <a href="#">
                      <h4>{{vacancy.NAME}}</h4></a>
                    <div class="links_locat d-flex align-items-center">

                      <div class="location">
                        Salary from: <b>{{vacancy.SALARY_FROM}} $</b>
                      </div>

                      <div class="location">
                        <p>
                          <i class="fa fa-map-marker"></i>
                          {{vacancy.CITY}},
                          {{vacancy.COUNTRY}}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="jobs_right">
                  <div class="apply_now">
                    <a href="#" class="boxed-btn3">Look more</a>
                  </div>
                  <div class="date">
                    <p>Created at {{vacancy.created_at}}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  <!--      <Candidates />-->

    <div class="top_companies_area" v-if="this.homePageData.companies">
      <div class="container">
        <div class="row align-items-center mb-40">
          <div class="col-lg-6 col-md-6">
            <div class="section_title">
              <h3>Companies</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-xl-3 col-md-6" v-for="(company, index) in this.homePageData.companies">
            <div class="single_company">
              <div class="thumb">
                <img :src="svgIcon" :alt="svgIcon">
              </div>
              <a :href="`/browse-job?COMPANY_ID=${company.id}`"><h3>{{company.NAME}}</h3></a>
              <p><span>{{company.QUANTITY_OF_VACANCIES}}</span> Available position</p>
            </div>
          </div>
        </div>
      </div>
    </div>



  <!--      <LookingForJob />-->
  <!--      <Reviews />-->
  <Footer />
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import FindJob from "./homepage/FindJob";
import Slider from "./homepage/Slider";
import JobCategories from "./homepage/JobCategories";

//import JobListing from "./homepage/_JobListing";

import Candidates from "./homepage/Candidates";

//import Companies from "./homepage/_Companies";

import LookingForJob from "./homepage/LookingForJob";
import Reviews from "./homepage/Reviews";
import axios from 'axios';

import {GLOBAL_CONSTANTS} from '/src/constants.js';

export default {
  name: "JobBoardVueService",
  components: {
    Header,
    Footer,
    Slider,
    FindJob,
    JobCategories,
    //JobListing,
    Candidates,
    //Companies,
    LookingForJob,
    Reviews
  },
  data: function(){
    return {
      homePageData: []
    }
  },
  methods:{
    getData: function () {
      axios.get(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/homepage/`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        this.homePageData = response.data;

        console.log(this.homePageData);
      });
    }
  },
  computed: {
    svgIcon() {
      let min = 1;
      let max = 4;

      let number = Math.floor(min + Math.random() * (max - min));
      return require(`@/assets/img/svg_icon/${number}.svg`);
    },
  },
  mounted(){
    this.getData();
  }
}
</script>
