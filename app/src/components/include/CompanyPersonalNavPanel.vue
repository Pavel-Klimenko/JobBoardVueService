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
    props: ['company_id'],
    data: function(){
      return {
        nav_elements: [
          {title: 'Company details', link:'/personal/company/' + this.company_id, page: 'company_details'},
          {title: 'My vacancies', link:'/personal/company/'+ this.company_id +'/my-vacancies', page: 'my_vacancies'},
          {title: 'Create new vacancy', link:'/personal/company/'+ this.company_id +'/create-vacancy', page: 'create_new_vacancy'},
        ],
      }
    },
  }
</script>