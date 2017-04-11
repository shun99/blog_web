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

  export default {
    data () {
      return {
        formData: {
          title: '',
          des: '',
          content: '',
          articleType: 1
        },
        submitUrl: 'http://192.168.11.148:3000/api/article',
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
      submitData () {
        this.$http.post(this.submitUrl, this.formData).then((response) => {
          console.log(response.body);
        });
      },
      goCheckItem (index) {
        this.formData.articleType = index;
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
        background theme-color
        border none
        color #fff
    .button
      width: 100%
      max-width: 300px
      padding 5px
      background theme-color
      margin 10px 0px
      font-size 12px
      color #fff
      -webkit-appearance: none;
      border-radius: 2px;
      border: none;
      outline: none;

</style>
