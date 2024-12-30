<template>
  <Header />
    <section class="blog_area section-padding" v-if="info.vacancy_requests">
      <div class="container">
        <div class="row">
        <h1 class="main_headings">My vacancy requests</h1>
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="blog_left_sidebar">
            <article class="blog_item">
              <div class="blog_details">
                  <div v-for="vacancy_request in info.vacancy_requests">
                    <a class="d-inline-block" v-bind:href="'/vacancies/detail/' + vacancy_request.vacancy.id" >
                      <h2>{{vacancy_request.vacancy.title}}</h2>
                    </a>
                    <br/>
                    <h4>Status: <u>{{vacancy_request.status.code}}</u></h4>
                    <br/>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog_right_sidebar">
            <CandidatePersonalNavPanel :candidate_id="this.$route.params.id"/>
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
import CandidatePersonalNavPanel from "/src/components/include/CandidatePersonalNavPanel";
import axios from 'axios';

export default {
  data: function(){
    return {
      token: localStorage.getItem('token'),
      role_name: localStorage.getItem('role_name'),
      related_entity_id: localStorage.getItem('related_entity_id'),
      info: {},
    }
  },
  methods:{
    //{{this.$route.params.id}}
    getMyVacancyRequests: function () {
      axios.get(`/sanctum/csrf-cookie`).then(response => {
        axios.get(`/api/personal/candidate/vacancy-requests`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }
        }).then((response) => {
          this.info.vacancy_requests = response.data.info;
          disablePreloader();
        });
      });
    },
  },
  components: {
    Header,
    Footer,
    CandidatePersonalNavPanel
  },
  mounted(){
    this.getMyVacancyRequests();
  }
}
</script>