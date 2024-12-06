<template>
  <Header />

  <div class="job_listing_area plus_padding">
    <div class="container">
      <div class="row">

        <ListFilter entity="candidates" />

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
                    <div class="thumb" v-if="candidate.user.image">
                      <img :src="require(`@/assets` + candidate.user.image)">
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
        </div>

        <Pagination :entity_list="this.candidates" v-on:getList="getCandidates"/>

      </div>
    </div>
  </div>
  <Footer />
</template>


<script>
import Header from "./Header";
import Footer from "./Footer";
import Pagination from "./include/Pagination";
import { disablePreloader } from "/src/functions/helpers";
import axios from 'axios';
import ListFilter from "./filters/ListFilter";


export default {
  data: function(){
    return {
      candidates: [],
      limit_page: 10,
    }
  },
  methods:{
    getCandidates: function (page = 1) {
      //TODO перенести все в компонент!
      const job_category_id = this.$route.query.job_category_id;
      const level_id = this.$route.query.level_id;
      const filter = {};

      if (job_category_id != undefined) {
        filter.job_category_id = job_category_id;
      }

      if (level_id != undefined) {
        filter.level_id = level_id;
      }

      filter.page =  page;
      filter.limit_page = this.limit_page;

      axios.get(`/api/candidates/`, {
        params: filter,
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        console.log(response.data);
        this.candidates = response.data.info.candidates;
        disablePreloader();
      });
    }
  },
  components: {
    ListFilter,
    Header,
    Footer,
    Pagination,
  },
  mounted(){
    this.getCandidates();
  }
}
</script>

