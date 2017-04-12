<template>
  <div id="app" class="app-vue">
    <ToolBar :owner="owner" :menuItemList="menuItemList" @pageType="pageType"></ToolBar>
    <keep-alive>
      <router-view class="app-content-wrapper"></router-view>
    </keep-alive>
  </div>
</template>


<script type="text/ecmascript-6">
  import ToolBar from '@/components/base/ToolBar';

  export default {
    data () {
      return {
        owner: {
          name: '一个很严肃的人'
        },
        menuItemList: ['Home', 'Android', 'Web', 'Node', 'About']
      };
    },
    components: {
      'ToolBar': ToolBar
    },
    methods: {
      pageType (type) {
        console.log(type);
      },
      openArticle (item) {
        console.log(item);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./assets/stylus/mixin.styl";
  .app-vue
    font-size: 0px
    .app-content-wrapper
      z-index 0
      position: absolute
      top: 50px
      left: 0px
      bottom: 0px
      right: 0px

</style>
