<template>
  <div class="article-vue">
    <div class="where">{{$route.params.id}}</div>
    <div>
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import marked from 'marked';

  export default {
    data () {
      return {
        input: '',
        api: 'http://192.168.11.148:3000/api/article?id='
      };
    },
    created () {
      let url = this.api + this.$route.params.id;
      this.$http.get(url).then(response => {
        this.input = response.body.data.content;
      });
    },
    computed: {
      compiledMarkdown () {
        return marked(this.input, {sanitize: true});
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
    padding: 0 20px
    code
      color: #f66
    .where
      font-size: 14px
      color: #f66
</style>
