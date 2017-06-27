<template>
  <div class="about-vue">
    <markdown :content="article.content"></markdown>
    <bottom class="bot"></bottom>
  </div>
</template>


<script type="text/ecmascript-6">
  import Bottom from '@/components/base/Bottom';
  import MDView from '@/components/base/MDView';
  import api from '../app/api';

  export default {
    data () {
      return {
        article: {}
      };
    },
    components: {
      'bottom': Bottom,
      'markdown': MDView
    },
    created () {
      this.$http.get(api.about).then(response => {
        this.article = response.body.data;
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .about-vue
    font-family: 'Helvetica Neue', Arial, sans-serif
    display: inline-block
    vertical-align: top
    box-sizing: border-box
    font-size: 14px
    padding 10px
    overflow: auto
    .bot
      position: fixed
      left: 250px
      z-index 1px
      background #ffffff
      bottom: 0px
      right: 0px
      height 60px
      @media only screen and (max-width: 640px)
        left: 0px
</style>
