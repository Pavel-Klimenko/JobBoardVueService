<template>
  <Header />
    <div class="job_details_area" v-if="vacancy">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="blog_item_img" v-if="vacancy.company.user.image">
            <img :src="require(`@/assets` + vacancy.company.user.image)" class="card-img rounded-0" width="750" src="#" alt="">
          </div>
          <br/>
          <div class="blog_item_img">
            <h3>About company:</h3><br/>
            <p>{{vacancy.company.description}}</p>
          </div><br/>



          <div class="job_details_header">
            <div class="single_jobs white-bg d-flex justify-content-between">
              <div class="jobs_left d-flex align-items-center">

                <div class="jobs_conetent">
                  <a href="#"><h4>{{vacancy.title}}</h4></a>
                  <div class="links_locat d-flex align-items-center">
                    <div class="location">
                      <p><i class="fa fa-map-marker"></i>
                        {{vacancy.company.user.country}},
                        {{vacancy.company.user.city}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="descript_wrap white-bg">
            <div class="single_wrap">
              <h4>Job description</h4>
              <p>{{vacancy.description}}</p>
            </div>
          </div>

        </div>

        <div class="col-lg-4">
          <div class="job_sumary">
            <div class="summery_header">
              <h3>Job Summery:</h3>
            </div>
            <div class="job_content">
              <ul>
                <li>Updated at: <span>{{vacancy.updated_at}}</span></li>
                <li>Salary from: <span><b>{{vacancy.salary_from}}</b></span></li>
                <br/>

                <li>Company: <span><b>{{vacancy.company.user.name}}</b></span></li>
                <li>Company Website:
                  <span><a v-bind:href="vacancy.company.web_site"><b>{{vacancy.company.web_site}}</b></a></span>
                </li>

                <br/>

                <li>Phone:<span><a v-bind:href="vacancy.company.user.phone"><b>{{vacancy.company.user.phone}}</b></a></span></li>
                <li>Email:<span><a v-bind:href="vacancy.company.user.email"><b>{{vacancy.company.user.email}}</b></a></span></li>
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
      vacancy: false,
    }
  },
  methods:{
    getVacancy: function () {
      axios.get(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/vacancies/${this.$route.params.id }`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        console.log(response.data);
        this.vacancy = response.data.info.vacancy;
        disablePreloader();
      });
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted(){
    this.getVacancy();
  }
}
</script>

