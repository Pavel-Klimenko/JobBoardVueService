<template>
  <Header />

  <div class="job_listing_area plus_padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
        </div>
        <div class="col-lg-9">
          <div class="recent_joblist_wrap">
            <div class="recent_joblist white-bg ">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <h4>List of vacancies</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="job_lists m-0">
            <div class="row">

              <div class="col-lg-12 col-md-12">
                <div class="single_jobs white-bg d-flex justify-content-between">

                  <div class="jobs_left d-flex align-items-center">
                    <div class="thumb">
                      <img :src="svgIcon2" :alt="svgIcon2">
                    </div>
                    <div class="jobs_conetent">

                      <div class="location">
                        Salary from: <b>1500$</b>
                      </div>

                      <div class="location">
                        <p>
                          <i class="fa fa-map-marker"></i>
                          Minsk,
                          Belarus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <div class="single_jobs white-bg d-flex justify-content-between">

                <div class="jobs_left d-flex align-items-center">
                  <div class="thumb">
                    <img :src="svgIcon5" :alt="svgIcon5">
                  </div>
                  <div class="jobs_conetent">

                    <div class="location">
                      Salary from: <b>2500$</b>
                    </div>

                    <div class="location">
                      <p>
                        <i class="fa fa-map-marker"></i>
                        Minsk,
                        Belarus
                      </p>
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

export default {
  name: "JobBoardVueService",
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
  }
}
</script>
