<template>
  <div class="article-vue">
    <markdown :content="input"></markdown>
    <more class="edit-wrapper" @item="item"></more>
  </div>
</template>

<script type="text/ecmascript-6">
  import markdown from './base/MDPrase.vue';
  //  import Router from 'vue-router';
  import more from './base/More.vue';
  import api from '../app/api';
  import * as vuexTypes from '../store/vuex-types';
  //  let router = new Router();

  export default {
    watch: {
      '$route' (to, from) {
        if (this.$route.params.id) {
          this.getArticle();
        }
      }
    },
    data () {
      return {
        input: ''
      };
    },
    created () {
      this.getArticle();
    },
    components: {
      markdown,
      more
    },
    methods: {
      getArticle () {
        let url = api.article_get + this.$route.params.id;
        this.$http.get(url).then(response => {
          this.input = response.body.data.content;
          this.$store.commit(vuexTypes.ARTICLE_INFO, response.body.data);
        });
      },
      item (index) {
        this.$router.push({path: '/article/update'});
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .article-vue
    font-family: 'Helvetica Neue', Arial, sans-serif
    display: inline-block
    width: 100%;
    height: 100%
    vertical-align: top
    box-sizing: border-box
    font-size: 14px
    .edit-wrapper
      position fixed
      bottom 20px
      right 20px
</style>
