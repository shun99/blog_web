<template>
  <div class="editor-vue">
    <div class="form-wrapper">
      <textarea class="item title" placeholder="标题" type="title" v-model="formData.title"></textarea>
      <textarea class="item des" placeholder="描述" v-model="formData.des"></textarea>
      <textarea class="item content" placeholder="内容" v-model="formData.content"></textarea>
      <button class="button" @click="submitData()">提交</button>
    </div>
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
        submitUrl: 'http://192.168.11.148:3000/api/article'
      };
    },
    methods: {
      submitData () {
        console.log('....');
        this.$http.post(this.submitUrl, this.formData).then((response) => {
          console.log(response.body);
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/mixin.styl";

  .editor-vue
    background #f4f5f5
    font-family: 'Helvetica Neue', Arial, sans-serif
    .form-wrapper
      display: flex
      height: 100%
      flex-direction: column
      align-items center
      font-size: 12px
      padding: 10px
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
      .button
        width: 100%
        max-width: 300px
        padding 5px
        background theme-color
        margin-top 10px
        font-size 12px
        color #fff
        -webkit-appearance: none;
        border-radius: 2px;
        border: none;
        outline: none;
</style>
