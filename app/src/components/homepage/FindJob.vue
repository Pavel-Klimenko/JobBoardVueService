<template>
  <div class="catagory_area">
    <div class="container">
      <div class="row align-items-center mb-40">
        <div class="col-lg-6 col-md-6">
          <div class="section_title">
            <h3>Find job:</h3>
          </div>
        </div>
      </div>
      <form>

        <input type="hidden" name="_token" value="aKZa3aAw8Klv8QtdFX3Qs6CSQVcq1tZeIRGdOmHw">            <div class="row cat_search">
        <div class="col-lg-4 col-md-4">
          <div class="single_input">
            <select name="CITY" class="wide" style="display: none;">
              <option selected="" disabled="">City</option>
              <option value="Minsk">Minsk</option>
            </select><div class="nice-select wide" tabindex="0"><span class="current">City</span><ul class="list"><li data-value="City" class="option selected disabled">City</li><li data-value="Minsk" class="option">Minsk</li></ul></div>
          </div>
        </div>
        <div class="col-lg-5 col-md-4">
          <div class="single_input">
            <select name="CATEGORY_ID" class="wide" style="display: none;">
              <option selected="" disabled="">Base technology</option>
              <option value="1">java</option>
              <option value="12">swift</option>
            </select><div class="nice-select wide" tabindex="0"><span class="current">Base technology</span><ul class="list"><li data-value="Base technology" class="option selected disabled">Base technology</li><li data-value="1" class="option">java</li><li data-value="12" class="option">swift</li></ul></div>
          </div>
        </div>
        <div class="col-lg-3 col-md-12">
          <div class="job_btn" id="find_job">
            <button type="submit" class="boxed-btn3">Find Job</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  </div>
</template>

