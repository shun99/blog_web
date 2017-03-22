<template>
  <div id="app" class="app-vue">
    <mu-drawer :width="myWidth" :open="open" :docked="docked" @close="toggle()">
      <div class="sidebar-wrapper border-1px">
        <div>
          <div class="item-wrapper" v-for="(menuItem, index) in menuItemList"
               @click="pageType(index)">
            <span class="title">{{menuItem}}</span>
          </div>
        </div>
      </div>
    </mu-drawer>
    <div class="header-wrapper">
      <div class="title-wrapper" @click="toggle(true)">
        <span class="icon iconfont icon-qietu02"></span>
        <span class="name">{{owner.name}}</span>
        <div class="menu-item-wrapper">
          <div class="item-wrapper" v-for="(menuItem, index) in menuItemList"
               @click="pageType(index)">
            <span class="title">{{menuItem}}</span>
          </div>
        </div>
      </div>
      <span class="icon iconfont icon-github"></span>
    </div>
    <router-view></router-view>
  </div>
</template>


<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        owner: {
          name: '一个很严肃又的人'
        },
        open: false,
        docked: true,
        myWidth: 200,
        menuItemList: ['首页', 'Android', 'Web', 'Node', '关于']
      };
    },
    methods: {
      toggle (flag) {
        this.open = !this.open;
        this.docked = !flag;
      },
      pageType (type) {
        switch (type) {
          case 0: {
            break;
          }
          case 1: {
            break;
          }
          case 2: {
            break;
          }
          case 3: {
            break;
          }
        }
        this.open = false;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./assets/stylus/mixin.styl";

  .app-vue
    font-size: 0px
    .header-wrapper
      display: flex
      justify-content: space-between
      align-items: center
      padding: 0px 30px
      height: 50px
      width: 100%
      background #0593d3
      @media only screen and (max-width: 640px)
        height: 40px
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
