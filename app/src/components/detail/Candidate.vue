<template>
  <Header />
    <div class="job_details_area" v-if="candidate">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog_item_img" v-if="candidate.user.image">
              <img :src="require(`@/assets` + candidate.user.image)" class="card-img rounded-0" width="750" src="#" alt="">
            </div>
            <div class="job_details_header">
              <div class="single_jobs white-bg d-flex justify-content-between">
                <div class="jobs_left d-flex align-items-center">

                  <div class="jobs_conetent">
                    <a href="javascript:void(0);">
                      <h4>
                      {{candidate.user.name}}
                    </h4></a>
                    <div class="links_locat d-flex align-items-center">
                      <div class="location">
                        <p><i class="fa fa-map-marker"></i>
                          {{candidate.user.country}},
                          {{candidate.user.city}}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div class="descript_wrap white-bg">

              <div class="single_wrap">
                <h4>Level:</h4>
                <p>{{candidate.level.code}}</p>
              </div>

              <div class="single_wrap">
                <h4>Experience:</h4>
                <p>{{candidate.experience}}</p>
              </div>
              <div class="single_wrap">
                <h4>Education:</h4>
                <p>{{candidate.education}}</p>
              </div>
              <div class="single_wrap">
                <h4>About me:</h4>
                <p>{{candidate.about_me}}</p>
              </div>
            </div>

          </div>

          <div class="col-lg-4">
            <div class="job_sumary">
              <div class="summery_header">
                <h3>Candidate Summery:</h3>
              </div>
              <div class="job_content">
                <ul>
                  <li>Updated at: <span>{{candidate.updated_at}}</span></li>
                  <li>Desired salary: <span><b>{{candidate.salary}}</b></span></li>
                  <li>Base technology: <span><b>{{candidate.job_category.name}}</b></span></li>
                  <li><span><b>{{candidate.years_experience}} years experience</b></span></li>
                  <br/>
                  <li>Phone: <span><a v-bind:href="candidate.user.phone"><b>{{candidate.user.phone}}</b></a></span></li>
                  <li>Email: <span><a v-bind:href="candidate.user.email"><b>{{candidate.user.email}}</b></a></span></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer />
</template>


<script>
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

import {GLOBAL_CONSTANTS} from '/src/constants.js';
import { disablePreloader } from "/src/functions/helpers";
import axios from 'axios';

export default {
  data: function(){
    return {
      candidate: false,
    }
  },
  methods:{
    getCandidate: function () {
      axios.get(`/api/candidates/${this.$route.params.id }`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        this.candidate = response.data.info.candidate;
        disablePreloader();
      });
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted(){
    this.getCandidate();
  }
}
</script>

