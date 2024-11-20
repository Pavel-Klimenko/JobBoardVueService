<template>
  <Header />

  <!--================Blog Area =================-->
  <section class="blog_area section-padding" v-if="company">
    <div class="container">
      <div class="row">
        <h1 class="main_headings">Company details</h1>
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="blog_left_sidebar">
            <article class="blog_item">

              <!--              <div class="blog_item_img">-->
              <!--                <img class="card-img rounded-0" :src="info.user.image" alt="">-->
              <!--              </div>-->

              <!--              <div class="blog_details">-->
              <!--                <input type="file" id="avatar">-->
              <!--              </div>-->

              <div class="blog_details user-info">
                <div>
                  <p><b>NAME:</b><br /><input class="personal_fields" type="text" v-model="company.user.name"></p>
                  <p><b>COUNTRY:</b><br /><input class="personal_fields" type="text" v-model="company.user.country"></p>
                  <p><b>CITY:</b><br /><input class="personal_fields" type="text" v-model="company.user.city"></p>
                  <p><b>PHONE:</b><br /><input class="personal_fields" type="text" v-model="company.user.phone"></p>
                </div>

                <div>
                  <p><b>WEB SITE:</b><br /><input class="personal_fields" type="text" v-model="company.web_site"></p>
                  <p><b>EMPLOYEE AMOUNT:</b><br /><input class="personal_fields" type="number" v-model="company.employee_cnt"></p>
                  <p><b>DESCRIPTION:</b><textarea v-model="company.description">{{company.description}}</textarea></p><br />
                </div>
              </div>

              <div class="blog_details edit-form" style="display: none">
                personal.inc.edit-forms.editCandidate
              </div>

              <div class="blog_details" id="edit_personal_info">
                <a href="javascript:void(0);" type="button" class="btn btn-outline-success" @click.prevent="updateCompanyInfo">
                  Update company info
                </a>
              </div>
            </article>
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
  <!--================Blog Area =================-->


  <Footer />
</template>

<script>
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import CompanyPersonalNavPanel from "/src/components/include/CompanyPersonalNavPanel";

import {GLOBAL_CONSTANTS} from '/src/constants.js';
//import { disablePreloader } from "/src/functions/helpers";
import axios from 'axios';

export default {
  data: function(){
    return {
      company: false,
    }
  },
  methods:{
    validateCompanyFields(employee_cnt, web_site, description) {
      let result = true;
      if (!employee_cnt || employee_cnt == '' || employee_cnt <= 0) result = false;
      if (!web_site || web_site == '') result = false;
      if (!description || description == '') result = false;
      return result;
    },
    validateUserFields(name, country, city, phone) {
      let result = true;
      if (!name || name == '') result = false;
      if (!country || country == '') result = false;
      if (!city || city == '') result = false;
      if (!phone || phone == '') result = false;
      return result;
    },

    getCompany: function () {
      axios.get(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/company/my-personal-info`, {
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': 'Bearer '+"13|byyzWeCDcIa32PgEGtjfHlMbm6Qy4wwF4yYX382C"
        }
      }).then((response) => {
        this.company = response.data.info;
        console.log(this.company);
      });
    },
    updateCompanyInfo: function () {
      let params =  {
        employee_cnt: this.company.employee_cnt,
        web_site: this.company.web_site,
        description: this.company.description,

        name: this.company.user.name,
        country: this.company.user.country,
        city: this.company.user.city,
        phone: this.company.user.phone,
      }

      if (!this.validateCompanyFields(params.employee_cnt, params.web_site, params.description) ||
          !this.validateUserFields(params.name, params.country, params.city, params.phone)) {
        alert('Fill the form');
      } else {
        console.log('updating company details....');
        axios.post(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/company/update-personal-info`, params, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((response) => {
          console.log(response);
          if (response.data.status == 'ok') {
            //location.reload();
          }
          //disablePreloader();
        });

      }



    }
  },
  components: {
    Header,
    Footer,
    CompanyPersonalNavPanel
  },
  mounted(){
    this.getCompany();
  }
}
</script>

<style>
.personal_fields {
  width: 50% !important;
}
</style>