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
        input: ''
      };
    },
    created () {
      this.$http.get('/api/makedown').then(response => {
        this.input = response.body.data.mdData;
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
