<template>
  <div class="slide-bar-vue" @click="clickItem">
    <div class="menu-wrapper">
      <div class="title">一个很严肃的人</div>
      <router-link to="/home" class="item">首页</router-link>
      <router-link to="/Android" class="item">归档</router-link>
      <router-link to="/Node" class="item">标签</router-link>
      <router-link to="/about" class="item">关于</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      clickItem () {
        this.$emit('clickSlide');
      }
    }
  };
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
        color color_txt_nav
        font-size 16px
      .item
        margin-left -30px
        color color_txt_nav
        font-size 14px
        margin-top 25px

</style>
