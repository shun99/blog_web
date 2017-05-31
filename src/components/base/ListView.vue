<template>
  <div class="list-vue">
    <ul>
      <li class="item-wrapper border-1px" v-for="(item, index) in itemList">
        <div class="title-wrapper">
          <router-link class="app-title-1" :to="'/article/' + item.id">{{item.title}}</router-link>
        </div>
        <div class="content-wrapper">
          <p class="app-content-1">{{item.des}}</p>
        </div>
        <div class="time-wrapper"><span class="time-1">2016.10.21</span></div>
      </li>
    </ul>
    <div class="page-wrapper">
      <!--<div class="page-control"><span>上一页</span></div>-->
      <!--<div class="page-control"><span>博客归档</span></div>-->
      <!--<div class="page-control"><span>下一页</span></div>-->
      <div class="page-control">
        <span v-if="showMore" @click="loadData()">加载更多</span>
        <span v-else>已经到底部</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
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
            this.listData.loading = false;
            response.body.data.forEach((rating) => {
              this.itemList.push(rating);
            });
          });
      }
    },
    computed: {
      showMore () {
        return this.listData.haveMore && this.itemList.length > 0;
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
    overflow: auto
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

    .page-wrapper
      border-1px-top()
      display flex
      height 55px
      align-items center
      justify-content center
      padding-left 20px
      padding-right 20px
      .page-control
        font-size 16px
        color color_primary
</style>
