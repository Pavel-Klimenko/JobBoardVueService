<template>

  <Header />
    <Slider />
    <div class="catagory_area" v-if="this.homePageData.cities && this.homePageData.job_categories">
      <div class="container">
      <div class="row align-items-center mb-40">
        <div class="col-lg-6 col-md-6">
          <div class="section_title">
            <h3>Find job:</h3>
          </div>
        </div>
      </div>
      <form>
        <input type="hidden" name="_token" value="aKZa3aAw8Klv8QtdFX3Qs6CSQVcq1tZeIRGdOmHw">
        <div class="row cat_search">
          <div class="col-lg-4 col-md-4">
            <div class="single_input">
              <select name="city" class="wide" style="display: none;">
                <option v-for="city in this.homePageData.cities" v-bind:value="city">{{city}}</option>
              </select>
              <div class="nice-select wide" tabindex="0"><span class="current">City</span>
                <ul class="list">
                  <li v-for="city in this.homePageData.cities" :data-value="city" class="option">{{city}}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-5 col-md-4">
            <div class="single_input">
              <select name="category_id" class="wide" style="display: none;">
                <option v-for="category in this.homePageData.job_categories" v-bind:value="category.id">{{category.name}}</option>
              </select>
              <div class="nice-select wide" tabindex="0"><span class="current">Base technology</span>
                <ul class="list">
                  <li v-for="category in this.homePageData.job_categories" :data-value="category.id" class="option">{{category.name}}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-12">
            <div class="job_btn" id="find_job">
              <button type="submit" class="boxed-btn3">Find Job</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>

    <div class="popular_catagory_area" v-if="this.homePageData.job_categories">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section_title mb-40">
                  <h3>There are vacancies for developers of:</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-xl-3 col-md-6" v-for="(category, index) in this.homePageData.job_categories">
                <div class="single_catagory">
                  <a :href="`/browse-job?CATEGORY_ID=${category.id}`">
                    <h4>{{category.name}}</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


  <!--TODO pictures for candidates and reviews sliders-->

    <div class="job_listing_area" v-if="this.homePageData.vacancies">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="section_title">
              <h3>Vacancies:</h3>
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
                      <h4>{{vacancy.title}}</h4></a>
                    <div class="links_locat d-flex align-items-center">

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

    <div class="top_companies_area" v-if="this.homePageData.candidates">
      <div class="container">
        <div class="row align-items-center mb-40">
          <div class="col-lg-6 col-md-6">
            <div class="section_title">
              <h3>Candidates:</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-xl-3 col-md-6" v-for="(candidate, index) in this.homePageData.candidates">
            <div class="single_company">
              <div class="thumb">
                <img :src="svgIcon" :alt="svgIcon">
              </div>
              <a :href="`/browse-job?CANDIDATE_ID=${candidate.id}`"><h3>{{candidate.user.name}}</h3></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="top_companies_area" v-if="this.homePageData.companies">
        <div class="container">
          <div class="row align-items-center mb-40">
            <div class="col-lg-6 col-md-6">
              <div class="section_title">
                <h3>Companies:</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-xl-3 col-md-6" v-for="(company, index) in this.homePageData.companies">
              <div class="single_company">
                <div class="thumb">
                  <img :src="svgIcon" :alt="svgIcon">
                </div>
                <a :href="`/browse-job?COMPANY_ID=${company.id}`"><h3>{{company.user.name}}</h3></a>
              </div>
            </div>
          </div>
        </div>
    </div>

    <LookingForJob />

    <div class="testimonial_area" v-if="this.homePageData.reviews">
      <div class="container">
        <div class="row">
        <div class="col-lg-12">
          <div class="section_title text-center mb-40">
            <h3>Reviews:</h3>
          </div>
        </div>
        <div class="col-xl-12">
            <div class="single_carousel" v-for="(review, index) in this.homePageData.reviews">
              <div class="row">
                <div class="col-lg-11">
                  <div class="single_testmonial d-flex align-items-center">
                    <div class="thumb">
<!--                      <img :src="review.PHOTO_VUE" height="228" width="228" alt="">-->
                      <div class="quote_icon">
                        <i class="Flaticon flaticon-quote"></i>
                      </div>
                    </div>
                    <div class="info">
                      <p>
                        <span><h2><b>{{ review.title }}</b></h2></span>
                      </p>

                      <p>{{ review.review }}</p>

                      <span>
                           <h4>
                               {{ review.user.role.name }}:
                               <b style="color:black">{{ review.user.name }}</b>
                           </h4>
                      </span>
                    </div>
                  </div>
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

//TODO разобраться с подключение swiper

import Header from "./Header";
import Footer from "./Footer";
import Slider from "./homepage/Slider";
import { disablePreloader } from "/src/functions/helpers";

import LookingForJob from "./homepage/LookingForJob";
import Reviews from "./homepage/Reviews";

import axios from 'axios';

import {GLOBAL_CONSTANTS} from '/src/constants.js';
import Vacancies from "./Vacancies.vue";

export default {
  name: "JobBoardVueService",
  components: {
    Vacancies,
    Header,
    Footer,
    Slider,
    LookingForJob,
    Reviews
  },
  data: function(){
    return {
      homePageData: [],
      reviewsPhotos: [],
    }
  },
  methods:{
    getData: function () {
      axios.get(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/homepage/`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        this.homePageData = response.data;
        console.log(response.data);
        disablePreloader();
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
