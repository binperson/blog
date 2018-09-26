<template>
    <div id='main'>
      <div id='main'>
      <article class="post page">
        {{ html }}
      </article>
      <my-footer></my-footer>
    </div>
    </div>
</template>

<script>

import model from '@/model'
import MyFooter from '@/components/Footer'

export default {
  data () {
    return {
      html: model.fetchAbout().then(html => {
        this.html = html
      })
    }
  },
  components: {
    MyFooter
  }
}
</script>
