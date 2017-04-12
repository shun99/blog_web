<template>
  <div class="list-vue" ref="listWrapper">
    <ul>
      <li class="item-wrapper border-1px" v-for="(item, index) in itemList" ref="itemWrapper">
        <div class="title-wrapper">
          <router-link class="title-1" :to="'/article/' + item.id">{{item.title}}</router-link>
        </div>
        <div class="content-wrapper">
          <p class="content-1">{{item.des}}</p>
        </div>
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
        listData: {
          loading: false,
          curPage: 1,
          haveMore: true,
          pageSize: 10
        }
      };
    },
    props: {
      api: ''
    },
    created () {
      this.listData.loading = false;
      this.listData.curPage = 1;
      this.listData.haveMore = true;
      this.loadData();
    },
    methods: {
      loadData () {
        if (!this.listData.haveMore || this.listData.loading) {
          return;
        }
        this.listData.loading = true;
        this.$http.get(this.api + '&page=' + this.listData.curPage + '&size=' + this.listData.pageSize)
          .then(response => {
            this.listData.haveMore = response.body.haveMore;
            this.listData.curPage++;
            response.body.data.forEach((rating) => {
              this.itemList.push(rating);
            });
            this.$nextTick(() => {
              this._initScroll();
              this._calculateHeight();
              this.listData.loading = false;
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
          if (this.listData.loading) {
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
      },
      clickItem (item) {
        this.$emit('clickItem', item);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl"

  .list-vue
    position: absolute
    top: 0px
    left: 0px
    bottom: 0px
    right: 0px
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
