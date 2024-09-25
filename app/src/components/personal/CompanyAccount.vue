<template>
  <Header />
    COMPANY PERSONAL ACCOUNT CANDIDATE ID: {{ $route.params.id }}
  <Footer />
</template>

<script>
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

import {GLOBAL_CONSTANTS} from '/src/constants.js';
//import { disablePreloader } from "/src/functions/helpers";
import axios from 'axios';

export default {
  data: function(){
    return {
      candidate: false,
    }
  },
  methods:{
    getCandidate: function () {
      axios.get(`${GLOBAL_CONSTANTS.APP_JOBSERVICE_URL}/api/candidates/${this.$route.params.id }`, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        this.candidate = response.data.info.candidate;
        console.log(this.candidate);
        //disablePreloader();
      });
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted(){
    this.getCandidate();
  }
}
</script>