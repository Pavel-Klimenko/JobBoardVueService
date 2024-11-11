<template>
  <div v-if="entity_list && entity_list.last_page > 1">
    <div class="row">
      <div class="col-lg-12">
        <div class="pagination_wrap">
          <ul>
            <li v-if="entity_list.current_page !== 1">
              <a href="javascript:void(0);" @click.prevent="getList(1)" rel="prev" aria-label="#previousPageUrl"><i class="ti-angle-left"></i></a>
            </li>

            <li v-if="entity_list.prev_page_url && entity_list.current_page - 1 !== 1">
              <a href="javascript:void(0);" @click.prevent="getList(entity_list.current_page - 1)"><span>{{entity_list.current_page - 1 }}</span></a>
            </li>

            <li class="active" aria-current="page">
              <a><span><b>{{this.entity_list.current_page}}</b></span></a>
            </li>

            <li v-if="entity_list.next_page_url && entity_list.current_page + 1 !== entity_list.last_page">
              <a href="javascript:void(0);" @click.prevent="getList(entity_list.current_page + 1)"><span>{{entity_list.current_page + 1}}</span></a>
            </li>

            <li v-if="entity_list.current_page !== entity_list.last_page">
              <a href="javascript:void(0);" @click.prevent="getList(entity_list.last_page)" rel="next" aria-label="#nextPageUrl"><i class="ti-angle-right"></i></a>
            </li>

          </ul>
          <p>Total pages:  <u>{{entity_list.total}}</u></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    getList(page) {
      this.$emit("getList", page);
    },
  },
  props: ['entity_list'],
  setup(props) {
    // setup() получает входной параметр в качестве первого аргумента.
    console.log(props.entity_list)
  },
}
</script>