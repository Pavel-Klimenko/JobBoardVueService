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
              <select name="CITY" class="wide" style="display: none;">
                <option v-for="city in this.homePageData.cities" v-bind:value="city.CITY">{{city.CITY}}</option>
              </select>
              <div class="nice-select wide" tabindex="0"><span class="current">City</span>
                <ul class="list">
                  <li v-for="city in this.homePageData.cities" :data-value="city.CITY" class="option">{{city.CITY}}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-5 col-md-4">
            <div class="single_input">
              <select name="CATEGORY_ID" class="wide" style="display: none;">
                <option v-for="category in this.homePageData.job_categories" v-bind:value="category.ID">{{category.NAME}}</option>
              </select>
              <div class="nice-select wide" tabindex="0"><span class="current">Base technology</span>
                <ul class="list">
                  <li v-for="category in this.homePageData.job_categories" :data-value="category.ID" class="option">{{category.NAME}}</li>
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
                  <h3>Job Categories</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-xl-3 col-md-6" v-for="(category, index) in this.homePageData.job_categories">
                <div class="single_catagory" v-if="category.QUANTITY_OF_VACANCIES > 0">
                  <a :href="`/browse-job?CATEGORY_ID=${category.ID}`">
                    <h4>{{category.NAME}}</h4>
                  </a>
                  <p><span>{{category.QUANTITY_OF_VACANCIES}}</span> Available positions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

    <!--TODO pictures for candidates and reviews sliders-->

<!--    <div class="featured_candidates_area" v-if="this.homePageData.candidates">-->
<!--      <div class="container">-->
<!--        <div class="row">-->
<!--          <div class="col-lg-12">-->
<!--            <div class="section_title text-center mb-40">-->
<!--              <h3>Featured Candidates</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="row">-->
<!--          <div class="col-lg-12">-->
<!--            <div class="candidate_active owl-carousel owl-loaded owl-drag">-->
<!--              <div class="owl-stage-outer">-->
<!--                <div class="owl-stage"-->
<!--                     style="transform: translate3d(-1140px, 0px, 0px); transition: all 0s ease 0s; width: 3420px;">-->

<!--                  <div class="owl-item cloned" style="width: 255px; margin-right: 30px;" v-for="(candidates, index) in this.homePageData.candidates">-->
<!--                    <div class="single_candidates text-center">-->
<!--                      <div class="thumb">-->
<!--                        <img :src="`@/assets${candidates.IMAGE}`" height="110" :alt="`@/assets${candidates.IMAGE}`">-->
<!--                      </div>-->
<!--                      <a href="#"><h4>{{candidates.NAME}}</h4></a>-->
<!--                    </div>-->
<!--                  </div>-->


<!--                </div>-->
<!--              </div>-->



<!--              <div class="owl-nav disabled">-->
<!--                <div class="owl-prev"><i class="ti-angle-left"></i></div>-->
<!--                <div class="owl-next"><i class="ti-angle-right"></i></div>-->
<!--              </div>-->
<!--              <div class="owl-dots disabled"></div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


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
              <div class="single_company" v-if="company.QUANTITY_OF_VACANCIES > 0">
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

    <LookingForJob />


<!--    TODO reviews programmatically!-->
<!--    <div class="testimonial_area">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-lg-12">-->
<!--          <div class="section_title text-center mb-40">-->
<!--            <h3>Review</h3>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-xl-12">-->
<!--          <div class="testmonial_active owl-carousel">-->

<!--            <div class="single_carousel" v-for="(review, index) in this.homePageData.reviews">-->
<!--              <div class="row" v-if="review.PHOTO_VUE">-->
<!--                <div class="col-lg-11">-->
<!--                  <div class="single_testmonial d-flex align-items-center">-->
<!--                    <div class="thumb">-->
<!--                      <img :src="review.PHOTO_VUE" height="228" width="228" alt="">-->
<!--                      <div class="quote_icon">-->
<!--                        <i class="Flaticon flaticon-quote"></i>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="info">-->
<!--                      <p>{{ review.REVIEW }}</p>-->
<!--                      <span>-->
<!--                           <h4><b>{{ review.NAME }}</b></h4>-->
<!--                      </span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <Footer />
</template>



<script>

//TODO разобраться с подключение swiper

import Header from "./Header";
import Footer from "./Footer";
import Slider from "./homepage/Slider";

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
        //console.log(response.data);
        Object.entries(response.data.reviews).forEach(function([key, value]) {
          response.data.reviews[key].PHOTO_VUE = require(`@/assets${value.PHOTO}`);
        });

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
