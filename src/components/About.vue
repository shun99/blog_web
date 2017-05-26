<template>
  <div class="about-vue">
    <span>关于</span>
    <bottom class="bot"></bottom>
  </div>
</template>


<script type="text/ecmascript-6">
  import Bottom from '@/components/base/Bottom';

  export default {
    data () {
      return {
        msg: ''
      };
    },
    components: {
      'bottom': Bottom
    },
    created () {
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .about-vue
    font-size 16px
    color cornflowerblue
    .bot
      position: fixed
      left: 250px
      z-index 1px
      background #ffffff
      bottom: 0px
      right: 0px
      height 60px
      z-index 0
      @media only screen and (max-width: 640px)
        display none
</style>
