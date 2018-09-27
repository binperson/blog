<template>
    <nav class="pagination">
        <router-link to="{ name: 'main', params: { page: prev }}" v-if=" typeof prev !== 'undefined' " v-link="{ name:'main', params:{ page: prev } }" class="prev">&laquo; 上一页</router-link>
        <router-link to="{ name: 'main', params: { page: next }}" v-if=" typeof next !== 'undefined' " v-link="{ name:'main', params:{ page: next } }" class="next">下一页 &raquo;</router-link>
        <div class=center>
            <a href="/archives.html">博客归档</a>
        </div>
    </nav>
</template>

<script>
/* eslint-disable */
export default {
    props: {
        prev: Number,
        next: Number,
    },

    data () {
        return {

        }
    }
}
</script>
