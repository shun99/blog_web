<template>
  <div class="editor-vue">
    <textarea class="item title" placeholder="标题" type="title" v-model="formData.title"></textarea>
    <textarea class="item des" placeholder="描述" v-model="formData.des"></textarea>
    <textarea class="item content" placeholder="内容" v-model="formData.content"></textarea>
    <div class="sort-wrapper">
      <span class="sort-title">分类:</span>
      <span class="sort-content" v-for="(sort, index) in sortData"
            :class="{'checked-sort': sort.type === formData.articleType}"
            @click="goCheckItem(sort.type)">{{sort.des}}</span>
    </div>
    <button class="button" @click="submitData()">提交</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../app/api';
  import * as utils from '../utils/index';

  export default {
    watch: {
      '$route' (to, from) {
        this.initData();
      }
    },
    created () {
      this.initData();
    },
    data () {
      return {
        formData: {},
        submitUrl: api.article_post,
        sortData: [
          {
            des: 'android',
            type: 1
          },
          {
            des: 'web',
            type: 2
          },
          {
            des: 'node',
            type: 3
          },
          {
            des: 'life',
            type: 4
          }
        ]
      };
    },
    methods: {
      initData () {
        if (this.$route.fullPath === '/article/update') {
          this.$nextTick(() => {
            this.formData = this.$store.getters.getEditArticle;
          });
        } else if (this.$route.fullPath === '/article/new') {
          this.formData = {};
        }
      },
      submitData () {
        if (!this.$store.getters.userIsLogin) {
          utils.toast('未登入');
          return;
        }
        if (this.verifyFormData()) {
          if (this.formData.id) {
            this.putArticle();
          } else {
            this.postArticle();
          }
        }
      },
      postArticle () {
        this.$http.post(this.submitUrl, this.formData)
          .then((response) => {
            utils.toast('提交成功');
            this.$router.push({path: '/home'});
          })
          .catch((e) => {
            utils.toast('提交失败');
          });
      },
      putArticle () {
        this.$http.put(this.submitUrl, this.formData)
          .then((response) => {
            utils.toast('提交成功');
            this.$router.push({path: '/home'});
          }).catch((e) => {
          utils.toast('提交失败');
        });
      },
      goCheckItem (index) {
        this.formData.articleType = index;
      },
      verifyFormData () {
        if (!this.formData.title) {
          utils.toast('标题不能为空');
          return false;
        }
        if (!this.formData.des) {
          utils.toast('描述不能为空');
          return false;
        }
        if (!this.formData.content) {
          utils.toast('内容不能为空');
          return false;
        }
        return true;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/mixin.styl";

  .editor-vue
    background #f4f5f5
    font-family: 'Helvetica Neue', Arial, sans-serif
    display: flex
    flex-direction: column
    align-items center
    font-size: 12px
    padding 0px 5px
    .item
      padding: 10px
      display: block
      width: 100%
      margin-top: 10px
      font-size 14px
      line-height 18px
      box-shadow: none
      border: 1px solid #ddd
      border-radius: 2px
      transition: border .3s
      background-color: #fff
      color #222
      resize: none
      outline: none
      vertical-align: top
    .title
      height 40px
    .des
      height: 70px
    .content
      flex 1
    .sort-wrapper
      margin-top 10px
      .sort-title
        color #222
        font-size: 12px
      .sort-content
        font-size: 12px
        margin-left: 10px
        padding 1px 5px
        color #909090
        background #fff
        border: 1px solid #f1f1f1
      .checked-sort
        background color_primary
        border none
        color #fff
    .button
      width: 100%
      max-width: 300px
      padding 5px
      background color_primary
      margin 10px 0px
      font-size 12px
      color #fff
      -webkit-appearance: none;
      border-radius: 2px;
      border: none;
      outline: none;

</style>
