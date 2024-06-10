<template>
  <div class="testimonial_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section_title text-center mb-40">
            <h3>Review</h3>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="testmonial_active owl-carousel owl-loaded owl-drag">
            <div class="owl-stage-outer">
              <div class="owl-stage"
                   style="transform: translate3d(-2220px, 0px, 0px); transition: all 0s ease 0s; width: 8880px;">
                <div class="owl-item cloned" style="width: 1110px;">
                  <div class="single_carousel">
                    <div class="row">
                      <div class="col-lg-11">
                        <div class="single_testmonial d-flex align-items-center">
                          <div class="thumb">
                            <img :src="bobPhoto" height="228" width="228" alt="">
                            <div class="quote_icon">
                              <i class="Flaticon flaticon-quote"></i>
                            </div>
                          </div>
                          <div class="info">
                            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                              including versions of Lorem Ipsum.</p>
                            <span>
                                                <h4><b> - Bob</b></h4>
                                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 1110px;">
                  <div class="single_carousel">
                    <div class="row">
                      <div class="col-lg-11">
                        <div class="single_testmonial d-flex align-items-center">
                          <div class="thumb">
                            <img :src="igorPhoto" height="228" width="228" alt="">
                            <div class="quote_icon">
                              <i class="Flaticon flaticon-quote"></i>
                            </div>
                          </div>
                          <div class="info">
                            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                              including versions of Lorem Ipsum.</p>
                            <span>
                                                <h4><b> - Igor</b></h4>
                                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item" style="width: 1110px;">
                  <div class="single_carousel">
                    <div class="row">
                      <div class="col-lg-11">
                        <div class="single_testmonial d-flex align-items-center">
                          <div class="thumb">
                            <img :src="alexPhoto" height="228" width="228" alt="">
                            <div class="quote_icon">
                              <i class="Flaticon flaticon-quote"></i>
                            </div>
                          </div>
                          <div class="info">
                            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                              including versions of Lorem Ipsum.</p>
                            <span>
                                                <h4><b> - Alex</b></h4>
                                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="owl-nav">
              <div class="owl-prev"><i class="ti-angle-left"></i></div>
              <div class="owl-next"><i class="ti-angle-right"></i></div>
            </div>
            <div class="owl-dots disabled"></div>
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


    bobPhoto() {
      return require(`@/assets/img/demoData/reviews/bob.jpg`);
    },
    igorPhoto() {
      return require(`@/assets/img/demoData/reviews/igor.png`);
    },
    alexPhoto() {
      return require(`@/assets/img/demoData/reviews/alex.jpg`);
    },


  }
}
</script>


