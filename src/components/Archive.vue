<template>
  <div class="archive-wrapper">
    <div class="title">归档</div>
    <div v-for="(archive, index) in archiveList" class="item_wrapper">
      <div class="mouth">{{getYearAndMouth(archive.timestamp)}}</div>
      <li v-for="(article, index) in archive.articleList" class="article">
        <router-link class="title" :to="'/article/' + article.id">{{article.title}}</router-link>
        <!--<span class="title">{{article.title}}</span>-->
        <span class="time">{{getDay(article.createdAt)}}</span>
      </li>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../app/api';
  import * as Utils from '../utils/timeUtils';
  export default {
    data () {
      return {
        archiveList: []
      };
    },
    created () {
      this.getArchive();
    },
    methods: {
      getArchive () {
        this.$http.get(api.archive).then(response => {
          this.archiveList = response.body.data;
        });
      },
      getYearAndMouth (data) {
        return Utils.getYearAndMouth(data);
      },
      getDay (data) {
        return Utils.getDay(data);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/mixin.styl"
  .archive-wrapper
    overflow: auto
    padding padding_content
    .title
      font-size size_title
      color color_txt_title
    .item_wrapper
      line-height 1.8
      .mouth
        margin-top 20px
        margin-bottom 10px
        font-size size_item_title
        color color_txt_item_title
      .article
        list-style-type disc
        font-size size_item_content
        line-height 1.8
        margin-left 22px
        vertical-align bottom
        .title
          font-size size_item_content
          color color_primary
        .time
          margin-left 10px
          font-size size_item_ps
          color color_txt_ps


</style>
