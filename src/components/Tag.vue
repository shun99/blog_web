<template>
  <div class="tag-vue">
    <div class="app-title-1">标签</div>
    <div class="tag-wrapper">
      <span class="tag" v-for="(tag, index) in tagList">{{tag.des}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {tagList} from '../app/constant';
  export default {
    data () {
      return {
        tagList: tagList
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/mixin.styl"

  .tag-vue
    padding-left 20px
    padding-top 20px
    .tag-wrapper
      margin-top 20px
      .tag
        font-size 20px
        color color_primary
        border: 1px solid color_primary
        border-radius: 4px;
        display: inline-block;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        margin: 0 15px 10px 0;
        padding: 0 15px;
        text-decoration: none;

</style>
