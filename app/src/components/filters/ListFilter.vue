<template>
  <div class="col-lg-3" v-if="job_categories.length > 0 && candidates_levels.length > 0">
    <div class="job_filter white-bg">
      <div class="form_inner white-bg">

        <h3>FILTER:</h3>
        <form>
          <div class="row">

            <div class="col-lg-12">
              <div class="single_field">
                <select class="categories-list" name="job_category_id" v-model="selected_job_category">
                  <option selected disabled value="0">Job category</option>
                  <option v-for="category in job_categories" v-bind:value="category.id">{{ category.name }}</option>
                </select>
              </div>
            </div>

            <div class="col-lg-12" v-if="entity === 'candidates'">
              <div class="single_field">
                <select class="sorting-list" name="level_id" v-model="selected_candidate_level">
                  <option selected disabled value="0">Level</option>
                  <option v-for="level in candidates_levels" v-bind:value="level.id">{{ level.code }}</option>
                </select>
              </div>
            </div>

            <div class="col-lg-12" v-if="entity === 'vacancies'">
              <div class="single_field">
                <input type="number" name="salary_from" v-model="selected_salary_from" placeholder="Salary from, $">
              </div>
            </div>

          </div>

          <div class="reset_btn">
            <button class="boxed-btn3 w-100" type="submit">Filter results</button>
          </div>
          <br/>

          <div class="reset_btn">
            <a :href="'/' + entity" class="btn btn-outline-danger">Reset filter</a>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import { disablePreloader } from "/src/functions/helpers";


export default {
  data: function(){
    return {
      selected_job_category: 0,
      job_categories: [],
      selected_candidate_level: 0,
      candidates_levels: [],
      selected_salary_from: '',
    }
  },
  props: ['entity'],
  methods:{
    getGetJobCategories: function () {
      axios.get(`/api/entity-directories/job-categories`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        console.log(response.data.info);
        this.job_categories = response.data.info;
      });
    },
    getCandidateLevels: function () {
      axios.get(`/api/entity-directories/candidate-levels`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        console.log(response.data.info);
        this.candidates_levels = response.data.info;
      });
    },
  },
  mounted() {
    this.getGetJobCategories();
    this.getCandidateLevels();


    let job_category_id = this.$route.query.job_category_id;
    let level_id = this.$route.query.level_id;
    let salary_from = this.$route.query.salary_from;

    if (this.$route.query.job_category_id != undefined) this.selected_job_category = job_category_id;
    if (this.$route.query.level_id != undefined) this.selected_candidate_level = level_id;
    if (this.$route.query.salary_from != undefined) this.selected_salary_from = salary_from;
  }
}
</script>