<template>
  <div class="more-vue">
    <span class="icon iconfont icon-more" @click="item(0)"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {};
    },
    methods: {
      item (index) {
        this.$emit('item', index);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .icon-more
    font-size 26px
    color #333
</style>
