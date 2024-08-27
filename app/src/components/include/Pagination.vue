<template>
  <!--TODO перенести pagination в отдельный компонент-->
  <!-- pagination  -->

  {{entity_list}}

<!--  <div v-if="this.entity_list.data && this.entity_list.last_page > 1">-->
<!--    <div class="row">-->
<!--      <div class="col-lg-12">-->
<!--        <div class="pagination_wrap">-->
<!--          <ul>-->
<!--            <li v-if="this.entity_list.current_page !== 1">-->
<!--              <a href="javascript:void(0);" @click.prevent="getCandidates(1)" rel="prev" aria-label="#previousPageUrl"><i class="ti-angle-left"></i></a>-->
<!--            </li>-->

<!--            <li v-if="this.entity_list.prev_page_url && this.entity_list.current_page - 1 !== 1">-->
<!--              <a href="javascript:void(0);" @click.prevent="getCandidates(this.entity_list.current_page - 1)"><span>{{this.entity_list.current_page - 1 }}</span></a>-->
<!--            </li>-->

<!--            <li class="active" aria-current="page">-->
<!--              <a><span><b>{{this.entity_list.current_page}}</b></span></a>-->
<!--            </li>-->

<!--            <li v-if="this.entity_list.next_page_url && this.entity_list.current_page + 1 !== this.entity_list.last_page">-->
<!--              <a href="javascript:void(0);" @click.prevent="getCandidates(this.entity_list.current_page + 1)"><span>{{this.entity_list.current_page + 1}}</span></a>-->
<!--            </li>-->

<!--            <li v-if="this.entity_list.current_page !== this.entity_list.last_page">-->
<!--              <a href="javascript:void(0);" @click.prevent="getCandidates(this.entity_list.last_page)" rel="next" aria-label="#nextPageUrl"><i class="ti-angle-right"></i></a>-->
<!--            </li>-->

<!--          </ul>-->
<!--          <p>Total pages:  <u>{{this.entity_list.total}}</u></p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>

export default {
  data: function () {
    return {
      //entity_list: null,
    }
  }
}
</script>