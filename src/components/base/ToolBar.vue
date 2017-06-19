<template>
  <div class="toolbar-vue">
    <div class="header-wrapper">
      <div class="title-wrapper">
        <span class="icon iconfont icon-menu" @click="slideStatus()"></span>
        <span class="name">一个很严肃的人</span>
      </div>
      <span class="icon iconfont icon-github" @click="jumpUserCenter()"></span>
    </div>
    <div v-show="showSlide" class="sidebar-wrapper">
      <div class="slide-bg" @click="slideStatus()"></div>
      <transition name="slide">
        <SlideBar div v-show="showSlide" class="slide-content-wrapper"
                  @click="slideStatus()" @clickSlide="slideStatus"></SlideBar>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as utils from '../../utils/index';
  import SlideBar from '../base/SlideBar.vue';

  export default {
    data () {
      return {
        showSlide: false
      };
    },
    components: {
      'SlideBar': SlideBar
    },
    methods: {
      slideStatus () {
        this.showSlide = !this.showSlide;
      },
      jumpUserCenter () {
        if (!this.$store.getters.isLogin) {
          utils.loginStatus(true);
        } else {
          this.$router.push({path: '/user'});
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl"

  .slide-enter-active, .slide-leave-active
    transition: all 0.2s linear

  .slide-enter, .slide-leave-active
    transform: translate3d(-100%, 0, 0)

  .toolbar-vue
    .header-wrapper
      z-index 100
      position: fixed
      top: 0px
      left: 0px
      right 0px
      display: flex
      justify-content: space-between
      align-items: center
      padding: 0px 30px
      height: 50px
      width: 100%
      background color_primary
      @media only screen and (max-width: 640px)
        padding: 0px 10px
      .title-wrapper
        display: flex
        justify-content: space-between
        align-items: center
        .name
          font-size: 20px
          font-weight: 200px
          color: color_txt_nav
          @media only screen and (max-width: 640px)
            font-size: 14px
      .icon-github, .icon-menu
        font-size: 20px
        color: color_txt_nav
        &.icon-menu
          display: none
          @media only screen and (max-width: 640px)
            display inline
      .name
        font-size: 14px
        color: color_txt_nav
        margin-left: 6px
    .sidebar-wrapper
      position fixed
      top: 0px
      left 0px
      right 0px
      bottom 0px
      z-index 101
      .slide-bg
        width: 100%
        height: 100%
        background-color: #000
        opacity: 0.4
      .slide-content-wrapper
        position: fixed
        top 0px
        left 0px
        height: 100%
        width 220px
</style>
