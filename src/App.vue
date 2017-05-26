<template>
  <div id="app" class="app-vue">
    <tool-bar class="app-tool"></tool-bar>
    <slide-bar class="app-slide"></slide-bar>
    <keep-alive>
      <router-view class="app-content-wrapper"></router-view>
    </keep-alive>
    <login></login>
    <toast></toast>
  </div>
</template>


<script type="text/ecmascript-6">
  import SlideBar from '@/components/base/SlideBar';
  import ToolBar from '@/components/base/ToolBar';
  import Toast from '@/components/base/Toast';
  import Login from '@/components/user/Login';

  export default {
    components: {
      'slide-bar': SlideBar,
      'tool-bar': ToolBar,
      'login': Login,
      'toast': Toast
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./assets/stylus/mixin.styl";
  .app-vue
    font-size: 0px
    .app-tool
      display: none
      @media only screen and (max-width: 640px)
        display: flex
    .app-slide
      position: fixed
      top 0px
      left 0px
      height: 100%
      width 250px
      @media only screen and (max-width: 640px)
        display: none
    .app-content-wrapper
      position: fixed
      left: 250px
      top: 0px
      bottom: 0px
      right: 0px
      z-index 0
      @media only screen and (max-width: 640px)
        left: 0px
        top: 50px

</style>
