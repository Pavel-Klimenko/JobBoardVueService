<template>
  <div class="top_companies_area">
    <div class="container">
      <div class="row align-items-center mb-40">
        <div class="col-lg-6 col-md-6">
          <div class="section_title">
            <h3>Companies</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-xl-3 col-md-6">
          <div class="single_company">
            <div class="thumb">
              <img :src="svgIcon2" :alt="svgIcon2">
            </div>
            <a href="/browse-job?COMPANY_ID=7"><h3>EPAM</h3></a>
            <p><span>2</span> Available position</p>
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
    }
  }
}
</script>

