<template>
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
                  <option v-for="category in job_categories" v-bind:value="category.id">{{ category.name }}</option>
                </select>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="single_field">
                <select class="sorting-list" name="level_id" v-model="selected_candidate_level">
                  <option selected disabled value="0">Level</option>
                  <option v-for="level in candidates_levels" v-bind:value="level.id">{{ level.name }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="reset_btn">
            <button class="boxed-btn3 w-100" type="submit">Filter results</button>
          </div>
          <br/>

          <div class="reset_btn">
            <a href="/candidates" class="btn btn-outline-danger">Reset filter</a>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
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
  mounted(){
    const job_category_id = this.$route.query.job_category_id;
    const level_id = this.$route.query.level_id;

    if (this.$route.query.job_category_id != undefined) this.selected_job_category = job_category_id;
    if (this.$route.query.level_id != undefined) this.selected_candidate_level = level_id;
  }
}
</script>