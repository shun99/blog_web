<template>
  <div class="toolbar-vue">
    <div class="header-wrapper">
      <div class="title-wrapper">
        <span class="icon iconfont icon-qietu02" @click="slideStatus()"></span>
        <span class="name">{{owner.name}}</span>
        <div class="menu-item-wrapper">
          <div class="item-wrapper" v-for="(menuItem, index) in menuItemList">
            <router-link class="title" :to="'/' + menuItem">{{menuItem}}</router-link>
          </div>
        </div>
      </div>
      <span class="icon iconfont icon-github" @click="user()"></span>
    </div>
    <div v-show="showSlide" class="sidebar-wrapper">
      <div class="slide-bg" @click="slideStatus()"></div>
      <transition name="slide">
        <div v-show="showSlide" class="slide-content-wrapper" @click="slideStatus()">
          <div class="item-wrapper" v-for="(menuItem, index) in menuItemList">
            <router-link class="title" :to="'/' + menuItem">{{menuItem}}</router-link>
          </div>
        </div>
      </transition>
    </div>
    <login :show="showLogin" @close="closeLogin"></login>
  </div>
</template>

<script type="text/ecmascript-6">
  import Login from '@/components/user/Login';
  import {loadFromSession, StorageKey} from '../../assets/js/storageUtils';
  import Router from 'vue-router';
  let router = new Router();

  export default {
    data () {
      return {
        showSlide: false,
        showLogin: false
      };
    },
    props: {
      owner: {
        type: Object,
        default: {}
      },
      menuItemList: {
        type: Array,
        default: []
      }
    },
    components: {
      'login': Login
    },
    methods: {
      slideStatus () {
        this.showSlide = !this.showSlide;
      },
      user () {
        let user = loadFromSession(StorageKey.user, StorageKey.currentUser);
        if (!user || !user.token) {
          this.showLogin = true;
        } else {
          router.push({path: '/Edit'});
        }
      },
      closeLogin (index) {
        console.log('...' + index);
        this.showLogin = false;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .slide-enter-active, .slide-leave-active
    transition: all 0.5s linear

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
      background #0593d3
      @media only screen and (max-width: 640px)
        padding: 0px 10px
      .title-wrapper
        display: flex
        justify-content: space-between
        align-items: center
        .name
          font-size: 20px
          font-weight: 200px
          color: #fff
          @media only screen and (max-width: 640px)
            font-size: 14px
        .menu-item-wrapper
          display: block
          @media only screen and (max-width: 640px)
            display none
          .item-wrapper
            display: inline-block
            margin-left: 20px
            .title
              font-size: 14px
              color: #fff
      .icon-github, .icon-qietu02
        font-size: 20px
        color: #fff
        &.icon-qietu02
          display: none
          @media only screen and (max-width: 640px)
            display inline
      .name
        font-size: 14px
        color: #fff
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
        position: absolute
        display: flex
        flex-direction: column
        justify-content: center
        left: 0px
        top: 0px
        bottom: 0px
        max-width: 300px
        width: 60%
        background: #fff
        .item-wrapper
          display: flex
          align-items: center
          justify-content: center
          height: 40px
          .title
            font-size: 14px
            color: #000
</style>
