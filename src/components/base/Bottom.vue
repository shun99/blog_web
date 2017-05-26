<template>
  <div class="bot-vue">
    <span class="border-1px"></span>
    <p>
      <span class="content-1">©2017-一个很严肃的人-</span>
      <a class="app-a" href="">博客源码</a>
    </p>
    <p class="content">
      <span class="content-1">Powered by </span> <a class="app-a">Vue2</a>
      <span>&</span><a class="app-a"> Koa2</a>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl"

  .bot-vue
    border-1px-top()
    display flex
    flex-direction column
    justify-content center
    align-items center

  .content
    margin-top 5px

</style>
