<template>
  <Header />

  <div class="job_listing_area plus_padding">
    <div class="container">
      <div class="row">

        <div class="col-lg-3">
          <div class="job_filter white-bg">
            <div class="form_inner white-bg">
              <h3>FILTER CANDIDATES</h3>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="single_field">
                      <select class="categories-list" name="job_category_id" v-model="selected_job_category">
                        <option selected disabled value="0">Job category</option>
                        <option v-for="category in job_categories" v-bind:value="category.id">{{category.name}}</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="single_field">
                      <select class="sorting-list" name="level_id" v-model="selected_candidate_level">
                        <option selected disabled value="0">Level</option>
                        <option v-for="level in candidates_levels" v-bind:value="level.id">{{level.name}}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="reset_btn">
                  <button class="boxed-btn3 w-100" type="submit">Filter results</button>
                </div> <br />

                <div class="reset_btn">
                  <a href="/candidates" class="btn btn-outline-danger">Reset filter</a>
                </div>

              </form>
            </div>
          </div>
        </div>

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
      selected_job_category: 0,
      job_categories: [
        {id:1, name:'java'},
        {id:2, name:'c'},
        {id:3, name:'c++'},
        {id:4, name:'c#'},
        {id:5, name:'python'},
        {id:6, name:'php'},
        {id:7, name:'javascript'},
        {id:8, name:'perl'},
        {id:9, name:'ruby'},
        {id:10, name:'assembler'},
        {id:11, name:'delphi'},
        {id:12, name:'swift'},
        {id:13, name:'go'},
        {id:14, name:'scala'},
        {id:15, name:'haskell'},
      ],

      selected_candidate_level: 0,
      candidates_levels: [
        {id:1, name:'junior'},
        {id:2, name:'middle'},
        {id:3, name:'senior'},
      ]
    }
  },
  methods:{
    getCandidates: function () {
      const job_category_id = this.$route.query.job_category_id;
      const level_id = this.$route.query.level_id;
      const filter = {};

      if (job_category_id != undefined) {
        this.selected_job_category = job_category_id;
        filter.job_category_id = job_category_id;
      }

      if (level_id != undefined) {
        this.selected_candidate_level = level_id;
        filter.level_id = level_id;
      }

      //console.log(filter);
      axios.get(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/candidates/`, {
        params: filter,
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        //console.log(response.data.info.candidates);
        this.candidates = response.data.info.candidates;
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

