<template>
    <div id='main'>
        <section id="page-index">
            <blog-summary v-for="item in items" :key="item" :article="item" ></blog-summary>
            <pagination :page.sync="page" :has-prev=false :has-next=true ></pagination>
        </section>
        <my-footer></my-footer>
    </div>
</template>

<script>
/* eslint-disable */
import model from '@/model'
import BlogSummary from '@/components/BlogSummary'
import Pagination from '@/components/Pagination'

export default {
  data () {
    return {
      page: 1,
      items: model.fetchBlogByPage(0).then(items=>{this.items=items; window.scrollTo(0, 0)})
    }
  },
  watch: {
      page (val, oldVal) {
          this.getItems();
      }
  },
  components: {
    BlogSummary,
    Pagination
  },
  methods: {
      getItems () {
          store.fetchBlogByPage(this,this.page -1 ).then(items=>{this.items=items;window.scrollTo(0, 0)})
      }
  }
}
</script>
