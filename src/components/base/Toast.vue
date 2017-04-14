<template>
  <div v-if="show" class="vue-toast">
    <span class="toast">{{this.$store.state.app.toast.msg}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      show: false,
      msg: ''
    },
    computed: {
      show () {
        return this.$store.state.app.toast.show;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .vue-toast
    z-index 999
    background #000000
    position fixed
    bottom 0px
    height 30px
    left 0px
    right 0
    display flex
    justify-content center
    align-items center
    .toast
      color #ffffff
      font-size 16px
</style>
