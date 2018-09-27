<template>
    <div id='main'>
        <section id="page-index">
            <li v-for="item in items" :key="item">
                {{item.title}}
            </li>
            <!--<template v-for="item in items">
                <blog-summary :article={item} ></blog-summary>
            <template>-->
        </section>
        <my-footer></my-footer>
    </div>
</template>

<script>
/* eslint-disable */
import model from '@/model'

export default {
  data () {
      return {
        items: model.fetchBlogByPage(0).then(items=>this.items=items)
      }
    }
}
</script>
