<template>
    <div id='main'>
        <section id="page-index">
            <blog-summary v-for="item in items" :key="item" :article="item" ></blog-summary>
        </section>
        <my-footer></my-footer>
    </div>
</template>

<script>
/* eslint-disable */
import model from '@/model'
import BlogSummary from '@/components/BlogSummary'

export default {
  data () {
    return {
      items: model.fetchBlogByPage(0).then(items=>this.items=items)
    }
  },
  components: {
    BlogSummary
  }
}
</script>
