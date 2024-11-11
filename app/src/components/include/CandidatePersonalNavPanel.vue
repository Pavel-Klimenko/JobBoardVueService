<template>
  <aside class="single_sidebar_widget post_category_widget">
    <ul class="list cat-list">
      <li v-for="element in nav_elements">
        <a v-bind:href="element.link" class="d-flex">
          <p>{{element.title}}</p>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    props: ['candidate_id'],
    data: function(){
      return {
        nav_elements: [
          {title: 'My Personal info', link:'/personal/candidate/' + this.candidate_id, page: 'my_personal_info'},
          {title: 'My vacancy requests', link:'/personal/candidate/' + this.candidate_id +'/vacancy-requests', page: 'my_vacancy_requests'},
        ],
      }
    },
  }
</script>