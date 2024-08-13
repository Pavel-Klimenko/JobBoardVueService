<template>
  <Header />
  <div class="job_listing_area plus_padding">
    <div class="container">
      <div class="row">

        <div class="col-lg-9">
          <div class="recent_joblist_wrap">
            <div class="recent_joblist white-bg ">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <h4>Candidates</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="job_lists m-0" v-if="this.candidates.data">
            <div class="row" v-for="(candidate, index) in this.candidates.data">
              <div class="col-lg-12 col-md-12">
                <div class="single_jobs white-bg d-flex justify-content-between">

                  <div class="jobs_left d-flex align-items-center">
                    <div class="thumb">
                      <img :src="svgIcon2" :alt="svgIcon2">
                    </div>
                    <div class="jobs_conetent">
                      <a v-bind:href="'/candidates/detail/' + candidate.id"><h4>{{candidate.user.name}}</h4></a>
                      <div class="location">
                        <p>Category: <b>{{candidate.job_category.name}}</b></p>
                        <p>Level: <b>{{candidate.level.code}}</b></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="job_lists m-0" v-else>
            <div class="row" >
              <h4>Candidates not found</h4>
            </div>
          </div>
        </div>

        <!-- pagination  -->
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
      candidates: [],
    }
  },
  methods:{
    getCandidates: function () {
      axios.post(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/candidates/`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        console.log(response.data);

        this.candidates = response.data;
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
    this.getCandidates();
  }
}
</script>

