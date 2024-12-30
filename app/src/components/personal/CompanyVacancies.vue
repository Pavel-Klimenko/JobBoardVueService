<template>
  <Header />
    <section class="blog_area section-padding" v-if="info.my_vacancies">
      <div class="container">


      <div class="row">
        <h1 class="main_headings">My vacancies</h1><br />
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item" v-for="vacancy in info.my_vacancies">
              <h2 class="accordion-header" :id="'panelsStayOpen-heading_'+ vacancy.id">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#panelsStayOpen-collapse_' + vacancy.id" aria-expanded="true" :aria-controls="'panelsStayOpen-collapse_' + vacancy.id">
                  {{vacancy.title}}
                </button>
              </h2>
              <div :id="'panelsStayOpen-collapse_'+ vacancy.id" class="accordion-collapse collapse" :aria-labelledby="'panelsStayOpen-heading_' + vacancy.id">
                <div class="accordion-body">
                  <div>
                    <p><b>Title: </b>{{vacancy.title}}</p>
                    <p><b>Salary from: </b>{{vacancy.salary_from}}$</p>
                    <p><a class="d-inline-block" v-bind:href="'/vacancies/detail/' + vacancy.id" target="_blank"><b></b>Go to vacancy &#8594;</a></p>
                    <p><a class="d-inline-block" v-bind:href="'/personal/company/'+this.$route.params.id +'/update-vacancy/'+vacancy.id+'/'"><b></b>Edit vacancy</a></p>
                  </div><br>

                  <div v-if="vacancy.requests_of_candidates.length > 0">
                    <h3>Candidate`s requests:</h3>
                    <ol>
                      <li v-for="candidate_request in vacancy.requests_of_candidates" style="margin: 10px;">
                        <div>
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
                          <p><b>Current answer status: </b>{{candidate_request.status.code}}</p>
                          <!--TODO add action buttons here-->
                          <p><b>Change answer status:</b><br />
                            <select class="personal_fields sorting-list" @change="changeAnswerStatus(candidate_request.id)"  v-model="selected_response_status">
                              <option selected disabled value="0">Change response status</option>
                              <option v-for="status in response_statuses" v-bind:value="status.id">{{ status.code }}</option>
                            </select>
                          </p>

                        </div>
                        <hr align="right" width="400" size="5" color="#00ff00" />
                      </li>
                    </ol>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="col-lg-4">
          <div class="blog_right_sidebar">
            <CompanyPersonalNavPanel :company_id="this.$route.params.id"/>
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

import { disablePreloader } from "/src/functions/helpers";
import CompanyPersonalNavPanel from "/src/components/include/CompanyPersonalNavPanel";
import axios from 'axios';

export default {
  data: function(){
    return {
      token: localStorage.getItem('token'),
      role_name: localStorage.getItem('role_name'),
      related_entity_id: localStorage.getItem('related_entity_id'),
      info: {},
      selected_response_status: 0,
      //TODO I need load it from back
      response_statuses: [],
    }
  },
  methods:{
      getMyVacancies: function () {
        axios.get(`/sanctum/csrf-cookie`).then(response => {
          axios.get(`/api/personal/company/my/vacancies`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.token}`
            }
          }).then((response) => {
            this.info.my_vacancies = response.data.info;
            console.log(this.info.my_vacancies);
            disablePreloader();
          });
        });
      },
      getResponseStatuses: function () {
        axios.get(`/api/entity-directories/candidate-response-statuses`, {
          headers: {'Content-Type': 'application/json'}
        }).then((response) => {
          this.response_statuses = response.data.info;
        });
      },

      changeAnswerStatus: function (candidateRequestId) {
        console.log('Changing vacancy request status...');
        let params =  {vacancy_request_id: candidateRequestId, answer_status_id: this.selected_response_status}

        axios.get(`/sanctum/csrf-cookie`).then(response => {
          axios.post(`/api/personal/company/answer-to-vacancy-request`, params, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.token}`
            }
          }).then((response) => {
            location.reload();
            console.log(response);
          });
        });
    }
  },
  components: {
    Header,
    Footer,
    CompanyPersonalNavPanel
  },
  mounted() {
    this.getResponseStatuses();
    this.getMyVacancies();
  }
}
</script>