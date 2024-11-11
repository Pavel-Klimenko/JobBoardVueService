<template>
  <Header />
    <section class="blog_area section-padding" v-if="info.my_vacancies">
      <div class="container">
      <div class="row">
        <h1>My vacancies</h1>
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="blog_left_sidebar">
            <article class="blog_item">
              <div class="blog_details">
                <div v-for="vacancy in info.my_vacancies" style="border: 3px solid greenyellow; margin: 20px">

<!--                  {{vacancy}}-->

                    <div>
                      <p><b>Title: </b>{{vacancy.title}}</p>
                      <p><b>Salary from: </b>{{vacancy.salary_from}}$</p>
                      <p><a class="d-inline-block" v-bind:href="'/vacancies/detail/' + vacancy.id"><b></b>Look vacancy</a></p>
                    </div><br>


                    <div v-if="vacancy.requests_of_candidates.length > 0">
                      <h3>Candidate`s requests:</h3>
                          <div v-for="candidate_request in vacancy.requests_of_candidates" style="margin: 10px; border: 1px solid black;">

                            <p><b>Name: </b>{{candidate_request.candidate.user.name}}</p>
                            <p><b>Level: </b>{{candidate_request.candidate.level.code}}</p>
                            <p><b>Summary years experience: </b>{{candidate_request.candidate.years_experience}}</p>


                            <div v-if="candidate_request.candidate_covering_letter">
                              <p><b>Candidate covering letter: </b></p>
                              <div>
                                {{candidate_request.candidate_covering_letter}}
                              </div>
                            </div><br />

                            <a class="d-inline-block" v-bind:href="'/candidates/detail/' + candidate_request.candidate_id">
                              <b>Candidate profile link</b>
                            </a>

                            <p><b>Answer status: </b>{{candidate_request.status.code}}</p>


                            <!--TODO add action buttons here-->
                          </div>
                    </div>

                </div>

              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    </section>
  <Footer />
</template>

<script>
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

import {GLOBAL_CONSTANTS} from '/src/constants.js';
//import { disablePreloader } from "/src/functions/helpers";
import axios from 'axios';

export default {
  data: function(){
    return {
      info: {},
    }
  },
  methods:{
    getMyVacancies: function () {
      //$route.params.id
      axios.get(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/company/my/vacancies`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        //this.candidate = response.data.info.candidate;
        this.info.my_vacancies = response.data.info;
        console.log(this.info.my_vacancies);
        //disablePreloader();
      });
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.getMyVacancies();
  }
}
</script>