<template>
  <div class="article-vue">
    <markdown :content="article.content"></markdown>
    <more v-if="showMore" class="edit-wrapper" @item="item"></more>
  </div>
</template>

<script type="text/ecmascript-6">
  import markdown from './base/MDPrase.vue';
  import more from './base/More.vue';
  import api from '../app/api';
  import * as utils from '../utils/index';

  export default {
    watch: {
      '$route' (to, from) {
        if (this.$route.params.id) {
          this.getArticle();
        }
      }
    },
    created () {
      this.getArticle();
    },
    data () {
      return {
        article: Object
      };
    },
    components: {
      markdown,
      more
    },
    computed: {
      showMore () {
        return utils.article.userType(this.article.userId);
      }
    },
    methods: {
      getArticle () {
        let url = api.article_get + this.$route.params.id;
        this.$http.get(url).then(response => {
          this.article = response.body.data;
        });
      },
      item (index) {
        utils.article.setEdit(this.article);
        this.$router.push({path: '/article/update'});
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .article-vue
    font-family: 'Helvetica Neue', Arial, sans-serif
    display: inline-block
    width: 100%
    vertical-align: top
    box-sizing: border-box
    font-size: 14px
    overflow: auto
    .edit-wrapper
      position fixed
      bottom 20px
      right 20px
</style>
