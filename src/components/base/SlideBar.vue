<template>
  <div class="slide-bar-vue" @click="clickItem">
    <div class="menu-wrapper">
      <img src="http://blog.yghysdr.cn/image/avatar.ico" width="60px" height="60px">
      <div class="title">一个很严肃的人</div>
      <router-link to="/home" class="item">首页</router-link>
      <router-link to="/archive" class="item">归档</router-link>
      <router-link to="/tag" class="item">标签</router-link>
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
    background-color: color_slide
    background-position: 0
    background-repeat: no-repeat
    background-size: cover
    overflow: auto
    font-family: Helvetica Neue, Arial, Hiragino Sans GB, STHeiti, Microsoft YaHei
    -webkit-font-smoothing: antialiased;
    .menu-wrapper
      display: flex
      flex-direction: column
      align-items: center
      margin-top 25%
      .title
        color color_txt_nav
        font-size 14px
        margin-top 25px
      .item
        margin-left -10px
        color color_txt_nav
        font-size 16px
        margin-top 25px

</style>
