<template>
  <div class="job_listing_area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="section_title">
            <h3>Job Listing</h3>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="brouse_job text-right">
            <a href="#" class="boxed-btn4">Browse More Job</a>
          </div>
        </div>
      </div>
      <div class="job_lists">
        <div class="row">
          <div class="col-lg-12 col-md-12" v-for="(vacancy, index) in this.homePageData.vacancies">
            <div class="single_jobs white-bg d-flex justify-content-between">
              <div class="jobs_left d-flex align-items-center">
                <div class="thumb">
                  <img :src="svgIcon2" :alt="svgIcon2">
                </div>
                <div class="jobs_conetent">
                  <a href="#">
                    <h4>{{vacancy.NAME}}</h4></a>
                  <div class="links_locat d-flex align-items-center">

                    <div class="location">
                      Salary from: <b>{{vacancy.SALARY_FROM}} $</b>
                    </div>

                    <div class="location">
                      <p>
                        <i class="fa fa-map-marker"></i>
                        {{vacancy.CITY}},
                        {{vacancy.COUNTRY}}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
              <div class="jobs_right">
                <div class="apply_now">
                  <a href="#" class="boxed-btn3">Look more</a>
                </div>
                <div class="date">
                  <p>Created at {{vacancy.created_at}}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      //TODO программное получение ссылок на эти иконки
      svgIcon2() {
        return require(`@/assets/img/svg_icon/2.svg`);
      },
      svgIcon5() {
        return require(`@/assets/img/svg_icon/5.svg`);
      },
    }
  }
</script>

