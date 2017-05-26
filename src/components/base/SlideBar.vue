<template>
  <div class="slide-bar-vue">
    <div class="menu-wrapper">
      <div class="title">一个很严肃的人</div>
      <div class="item">归档</div>
      <div class="item">首页</div>
      <div class="item">标签</div>
      <div class="item">关于</div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl";

  .slide-bar-vue
    display: flex
    justify-content: center
    align-items: center
    background-image: url('/static/sidebar.webp')
    background-position: 0
    background-repeat: no-repeat
    background-size: cover
    overflow: auto
    .menu-wrapper
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .title
        color txt-nav
        font-size 16px
      .item
        margin-left -30px
        color txt-nav
        font-size 14px
        margin-top 25px

</style>
