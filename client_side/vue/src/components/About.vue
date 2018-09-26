<template>
    <div id='main'>1111
        <div v-html="html"></div>
    </div>
</template>

<script>

import model from '@/model'

export default {
  data () {
    return {
      html: model.fetchAbout().then(html => {
        this.html = html
      })
    }
  }
}
</script>
