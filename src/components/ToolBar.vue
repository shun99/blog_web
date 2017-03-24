<template>
  <div class="toolbar-vue">
    <div class="header-vue">
      <div class="title-wrapper">
        <span class="icon iconfont icon-qietu02" @click="toggle(true)"></span>
        <span class="name">{{owner.name}}</span>
        <div class="menu-item-wrapper">
          <div class="item-wrapper" v-for="(menuItem, index) in menuItemList">
            <router-link class="title" :to="'/' + menuItem">{{menuItem}}</router-link>
          </div>
        </div>
      </div>
      <span class="icon iconfont icon-github"></span>
    </div>
    <mu-drawer :width="myWidth" :open="open" :docked="docked" @close="toggle()">
      <div class="sidebar-wrapper" @click="closeSlide()">
        <div>
          <div class="item-wrapper" v-for="(menuItem, index) in menuItemList">
            <router-link class="title" :to="'/' + menuItem">{{menuItem}}</router-link>
          </div>
        </div>
      </div>
    </mu-drawer>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data () {
      return {
        open: false,
        docked: true,
        myWidth: 200
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
    methods: {
      toggle (flag) {
        this.open = !this.open;
        this.docked = !flag;
      },
      closeSlide () {
        this.open = false;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .toolbar-vue
    .header-vue
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
      display: flex
      align-items: center
      justify-content: center
      height: 100%
      .item-wrapper
        display: flex
        align-items: center
        justify-content: center
        height: 40px
        .title
          font-size: 14px
          color: black
</style>
