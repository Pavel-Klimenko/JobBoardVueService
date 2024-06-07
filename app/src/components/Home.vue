<template>



  <Header />
  <!--      <Slider />-->
  <!--      <FindJob />-->
  <!--      <JobCategories />-->
  <JobListing />
  <!--      <Candidates />-->
  <Companies />
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
import JobListing from "./homepage/JobListing";
import Candidates from "./homepage/Candidates";
import Companies from "./homepage/Companies";
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
    JobListing,
    Candidates,
    Companies,
    LookingForJob,
    Reviews
  },
  mounted() {
    this.homePageData = this.getHomePageData();


    console.log(GLOBAL_CONSTANTS.APP_JOBSERVICE_URL);
    console.log(this.homePageData);

  },
  methods: {
    getHomePageData: function () {
      return axios.get(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/homepage/`,{
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(function (response) {
            return response;
          })
          .catch(function (error) {
            console.log(error);
          })
    }
  }
}
</script>
