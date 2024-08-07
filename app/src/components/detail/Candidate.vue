<template>
  <Header />
  <div class="job_details_area">
    <div class="container">
      <div class="row">

        <div class="col-lg-8">


          <div class="blog_item_img">
            <img class="card-img rounded-0" width="750" src="#" alt="">
          </div>
          <br/><br/>


          <div class="job_details_header">
            <div class="single_jobs white-bg d-flex justify-content-between">
              <div class="jobs_left d-flex align-items-center">
                <div class="thumb">
                  <img src="#" alt="">
                </div>
                <div class="jobs_conetent">
                  <a href="javascript:void(0);"><h4>
                    NAME
                  </h4></a>
                  <div class="links_locat d-flex align-items-center">
                    <div class="location">
                      <p><i class="fa fa-map-marker"></i>
                        COUNTRY,
                        CITY
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="descript_wrap white-bg">

            <div class="single_wrap">
              <h4>Level:</h4>
              <p>
                LEVEL,
                CATEGORY_NAME

                developer
              </p>
            </div>

            <div class="single_wrap">
              <h4>Experience:</h4>
              <p>sdfsdfsdfsdfsdfsdfsdf</p>
            </div>
            <div class="single_wrap">
              <h4>Education:</h4>
              <p>werwerwerwerwerwer</p>
            </div>
            <div class="single_wrap">
              <h4>Skills:</h4>
              <b>asdasdasdasdasd</b>
            </div>
            <div class="single_wrap">
              <h4>Languages:</h4>
              <ul>
                <li>dsfsdfwerwerwerwerwerewr</li>
              </ul>
            </div>
            <div class="single_wrap">
              <h4>About me:</h4>
              <p>54654645654654tyutyu</p>
            </div>
          </div>

        </div>

        <div class="col-lg-4">
          <div class="job_sumary">
            <div class="summery_header">
              <h3>Candidate Summery:</h3>
            </div>
            <div class="job_content">
              <ul>
                <li>Updated at: <span>retretre</span></li>
                <li>Desired salary: <span><b>ertertertert</b></span></li>
                <li>Base technology: <span><b>7657567657567</b></span></li>
                <li><span><b>44 years experience</b></span></li>
                <br/>
                <li>Phone:
                    <span>
                        <a href="tel:4343434"><b>4343434</b></a>
                     </span>
                </li>
                <li>Email:
                  <span>
                      <a href="mailto:EMAIL"><b>EMAIL</b></a>
                  </span>
                </li>

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
import axios from 'axios';

export default {
  data: function(){
    return {
      candidates: [],
    }
  },
  methods:{
    // getCandidates: function () {
    //   axios.post(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/candidates/`, {
    //     headers: {'Content-Type': 'application/json'}
    //   }).then((response) => {
    //     console.log(response.data);
    //
    //     this.candidates = response.data;
    //   });
    // }
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
    //this.getCandidates();
  }
}
</script>

