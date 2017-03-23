<template>
  <div class="list-vue" ref="listWrapper">
    <ul>
      <li class="item-wrapper border-1px" v-for="(item, index) in itemList" ref="itemWrapper">
        <div class="title-wrapper"><a class="title-1">百度{{index}}</a></div>
        <div class="content-wrapper"><p class="content-1">内容</p></div>
        <div class="time-wrapper"><span class="time-1">2016.10.21</span></div>
      </li>
    </ul>

  </div>
</template>


<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';

  export default {
    data () {
      return {
        itemList: [],
        loadMoreHeight: 0,
        scrollY: 0,
        loading: false,
        curPage: 0
      };
    },
    created () {
      this.loading = false;
      this.curPage = 0;
      this.loadData();
    },
    computer: {},
    methods: {
      loadData () {
        console.log(this.curPage);
        if (this.curPage > 3 || this.loading) {
          this.loading = true;
          return;
        }
        this.curPage++;
        this.loading = true;
        this.$http.get('/api/ratings').then(response => {
          console.log(this.itemList.length);
          response.body.data.forEach((rating) => {
            this.itemList.push(rating);
          });
          console.log(this.itemList.length);
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
            this.loading = false;
          });
        });
      },
      _initScroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.listWrapper, {
            click: true,
            probeType: 3
          });
        } else {
          this.scroll.refresh();
        }
        this.scroll.on('scroll', (pos) => {
          if (this.loading) {
            return;
          }
          this.scrollY = Math.abs(Math.round(pos.y));
          if (this.scrollY > 0 && this.loadMoreHeight > 0 && this.loadMoreHeight - this.scrollY < 100) {
            this.loadData();
          }
        });
      },
      _calculateHeight () {
        let itemList = this.$refs.itemWrapper;
        let itemListHeight = 0;
        for (let i = 0; i < itemList.length; i++) {
          itemListHeight += itemList[i].clientHeight;
        }
        this.loadMoreHeight = itemListHeight - this.$refs.listWrapper.clientHeight;
        console.log(this.loadMoreHeight);
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
