<template>
  <div class="editor-vue">
    <div class="pic-pos">
      <span class="app-btn-1" @click="insertPic()">插入图片</span>
      <input class="input-none" type="file" ref="inputPic" @change="uploadPic"/>
      <span class="app-btn-1" @click="insertTitle()">标题</span>
      <span class="app-btn-1" @click="insertDes()">描述</span>
      <span class="app-btn-1" @click="insertContent()">内容</span>
    </div>
    <textarea class="item content" placeholder="文章" v-model="formData.content"></textarea>
    <div class="sort-wrapper">
      <span class="sort-title">标签:</span>
      <label v-for="(sort, index) in sorts" class="sort-wrapper" :for="sort.id">
        <input type="checkbox" :id="sort.id" :value="sort.id" v-model="formData.type">
        {{sort.name}}
      </label>
      <!--<span class="sort-content">{{formData.type}}</span>-->
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
        if (to.path.indexOf('/article/update') !== -1) {
          this.initData();
          this.initSort();
        }
      }
    },
    created () {
      this.initData();
      this.initSort();
    },
    data () {
      return {
        formData: {
          type: []
        },
        selected: [],
        sorts: []
      };
    },
    methods: {
      initData () {
        if (this.$route.fullPath === '/article/update') {
          this.$nextTick(() => {
            this.formData = this.$store.getters.getEditArticle;
          });
        } else if (this.$route.fullPath === '/article/new') {
          this.formData = {
            type: [0]
          };
        }
      },
      initSort () {
        this.$http.get(api.sort).then(response => {
          this.sorts = response.body.data;
        });
      },
      submitData () {
        if (!this.$store.getters.isLogin) {
          utils.toast('未登入');
          utils.loginStatus(true);
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
        this.$http
          .post(api.article_post, this.formData, {
            headers: {
              uid: this.$store.getters.isLogin.uid + '',
              token: this.$store.getters.isLogin.token
            }
          })
          .then((response) => {
            if (response.body.code === 0) {
              utils.toast('提交成功');
              this.$router.push({path: '/home'});
            } else {
              utils.toast(response.body.msg);
            }
          })
          .catch((e) => {
            utils.toast('提交失败');
          });
      },
      putArticle () {
        this.$http
          .put(api.article_put, this.formData, {
            headers: {
              uid: this.$store.getters.isLogin.uid + '',
              token: this.$store.getters.isLogin.token
            }
          })
          .then((response) => {
            if (response.body.code === 0) {
              utils.toast('修改成功');
              this.$router.push({path: '/home'});
            } else {
              utils.toast(response.body.msg);
            }
          })
          .catch((e) => {
            utils.toast('提交失败');
          });
      },
      goCheckItem (index) {
        this.formData.type = index;
      },
      verifyFormData () {
        if (!this.formData.content) {
          utils.toast('内容不能为空');
          return false;
        }
        let content = this.formData.content;

        let titleEnd = content.indexOf('des:');
        this.formData.title = content.substring(0, titleEnd);
        this.formData.title = this.formData.title.replace('title:', '');

        let desEnd = content.indexOf('content:');
        this.formData.des = content.substring(titleEnd, desEnd);
        this.formData.des = this.formData.des.replace('des:', '');

        this.formData.content = this.formData.content.replace('title:', '');
        this.formData.content = this.formData.content.replace('des:', '');
        this.formData.content = this.formData.content.replace('content:', '');
        return true;
      },
      insertPic () {
        if (!this.$store.getters.isLogin) {
          utils.loginStatus(true);
        } else {
          this.$refs.inputPic.click();
        }
      },
      uploadPic (e) {
        if (e.target.files && e.target.files[0]) {
          if (!/\/(?:jpeg|jpg|png)/i.test(e.target.files[0].type)) {
            return;
          }
          let pic = new FormData();
          pic.append('file', e.target.files[0]);
          this.$http.post(api.article_pic_post, pic, {
            headers: {
              uid: this.$store.getters.isLogin.uid + '',
              token: this.$store.getters.isLogin.token
            }
          }).then((response) => {
            if (response.body.code === 0) {
              let conTemp = '![name](' + response.body.data + ')';
              if (this.formData.content) {
                conTemp = this.formData.content + '\n' + conTemp;
              }
              this.$set(this.formData, 'content', conTemp);
            }
          });
        }
      },
      insertTitle () {
        let conTemp = 'title:';
        if (this.formData.content) {
          conTemp = this.formData.content + '\n' + conTemp;
        }
        this.$set(this.formData, 'content', conTemp);
      },
      insertDes () {
        let conTemp = 'des:>';
        if (this.formData.content) {
          conTemp = this.formData.content + '\n' + conTemp;
        }
        this.$set(this.formData, 'content', conTemp);
      },
      insertContent () {
        let conTemp = 'content:';
        if (this.formData.content) {
          conTemp = this.formData.content + '\n' + conTemp;
        }
        this.$set(this.formData, 'content', conTemp);
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
      .sort-wrapper
        margin-left: 10px
        .sort-content
          font-size: 12px
          padding 1px 5px
          color #909090
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

  .pic-pos
    width: 100%
    margin-top: 10px
    .input-none
      display none
</style>
