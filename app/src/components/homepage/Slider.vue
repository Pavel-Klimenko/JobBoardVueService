<template>
  <div class="slider_area">
    <div class="single_slider  d-flex align-items-center slider_bg_1">
      <div class="container">
        <div class="row align-items-center">
        </div>
      </div>
    </div>
    <div class="ilstration_img wow fadeInRight d-none d-lg-block text-right" data-wow-duration="1s" data-wow-delay=".2s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.2s; animation-name: fadeInRight;">
      <img :src="illustrationImg" :alt="illustrationImg">
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      illustrationImg() {
        return require(`@/assets/img/banner/illustration.png`);
      }
    }
  }
</script>

