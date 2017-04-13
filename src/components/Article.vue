<template>
  <div class="article-vue">
    <markdown :content="input"></markdown>
  </div>
</template>

<script type="text/ecmascript-6">
  import markdown from './base/MDPrase.vue';
  import api from '../assets/js/api';

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
      markdown
    },
    methods: {
      getArticle () {
        let url = api.article_get + this.$route.params.id;
        this.$http.get(url).then(response => {
          this.input = response.body.data.content;
        });
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
</style>
