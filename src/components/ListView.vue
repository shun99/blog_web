<template>
  <div class="list-vue" ref="listWrapper">
    <ul>
      <li class="item-wrapper border-1px" v-for="(item, index) in itemList">
        <div class="title-wrapper"><a class="title-1">百度{{index}}</a></div>
        <div class="content-wrapper"><p class="content-1">内容</p></div>
        <div class="time-wrapper"><span class="time-1">2016.10.21</span></div>
      </li>
    </ul>

  </div>
</template>


<script type="text/ecmascript-6">
  import Scroll from 'better-scroll';

  export default {
    data () {
      return {
        itemList: {
          type: Array,
          default: []
        }
      };
    },
    created () {
      this.$http.get('/api/ratings').then(response => {
        this.itemList = response.body.data;
        this.$nextTick(() => {
          this._initScroll();
        });
      });
    },
    methods: {
      _initScroll () {
        this.scroll = new Scroll(this.$refs.listWrapper);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/mixin.styl"

  .list-vue
    overflow: hidden
    .item-wrapper
      margin 0px 20px
      padding-top 20px
      padding-bottom 5px
      border-1px-bottom()
      &:last-child
        border-none-bottom()
      .title-wrapper
      .content-wrapper
        padding 5px 0px
      .time-wrapper
        display: flex
        flex-direction: row-reverse

</style>
