<template>
  <Header />
    <div class="job_listing_area plus_padding">
    <div class="container">
      <div class="row">

        <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
          <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
            <div class="flex items-center space-x-4">
              <div class="flex flex-col leading-tight">
                <div class="text-2xl mt-1 flex items-center">
                  <span class="text-gray-700 mr-3">auth_user_name</span>
                </div>

                <span class="text-lg text-gray-600">auth_user_email</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            <chat-messages :user="auth_user"></chat-messages>
          </div>

          <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <chat-form></chat-form>
          </div>
        </div>

      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";




// import Pagination from "./include/Pagination";
import { disablePreloader } from "/src/functions/helpers";
import axios from 'axios';
// import ListFilter from "./filters/ListFilter";



export default {
  data: function(){
    return {
      // token: localStorage.getItem('token'),
      // role_name: localStorage.getItem('role_name'),
      // related_entity_id: localStorage.getItem('related_entity_id'),
      // vacancies: [],
      // selected_job_category: 0,
      // limit_page: 10,
      // job_categories: [],
      // selected_salary_from: '',
    }
  },
  methods:{
  },
  components: {
    Header,
    Footer,
  },
  mounted(){
    disablePreloader();
  }
}
</script>
