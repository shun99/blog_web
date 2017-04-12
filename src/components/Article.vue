<template>
  <div class="article-vue">
    <markdown :content="input"></markdown>
  </div>
</template>

<script type="text/ecmascript-6">
  import markdown from './base/markdown';

  export default {
    watch: {
      '$route' (to, from) {
        this.getArticle();
      }
    },
    data () {
      return {
        input: '',
        api: 'http://192.168.11.148:3000/api/article?id='
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
        let url = this.api + this.$route.params.id;
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
    height: 100%
    vertical-align: top
    box-sizing: border-box
    font-size: 14px
</style>
