<template>
  <div class="vue-user">
    <div class="avatar-wrapper">
      <img :src="avatar" class="avatar">
      <span class="edit" @click="editAvatar">编辑</span>
      <input class="input-none" type="file" ref="updateAvatar" @change="loadPic"/>
    </div>
    <span class="user-item">一个很严肃的人</span>
    <span class="user-item">这家伙很懒O(∩_∩)O</span>
    <button class="app-btn-1" @click="uploadAvatar()">修改头像</button>
    <button class="app-btn-1" @click="createArticle()">创建新文章</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../../app/api';
  import * as utils from '../../utils/index';
  export default {
    data () {
      return {
        avatar: this.$store.getters.curUser.avatar,
        needUpload: false,
        data: new FormData()
      };
    },
    methods: {
      createArticle () {
        if (!this.$store.getters.isLogin) {
          utils.loginStatus(true);
        } else {
          this.$router.push({path: '/article/new'});
        }
      },
      editAvatar () {
        if (!this.$store.getters.isLogin) {
          utils.loginStatus(true);
        } else {
          this.$refs.updateAvatar.click();
        }
      },
      loadPic (e) {
        if (e.target.files && e.target.files[0]) {
          if (!/\/(?:jpeg|jpg|png)/i.test(e.target.files[0].type)) {
            return;
          }
          let reader = new FileReader();
          let vueObj = this;
          reader.onload = function (evt) {
            vueObj.avatar = evt.target.result;
            vueObj.needUpload = true;
          };
          reader.readAsDataURL(e.target.files[0]);
          this.data.append('file', e.target.files[0]);
        }
      },
      uploadAvatar () {
        if (!this.needUpload) {
          utils.toast('还未编辑头像');
          return;
        }
        this.$http
          .put(api.avatar_upload, this.data, {
            headers: {
              uid: this.$store.getters.isLogin.uid,
              token: this.$store.getters.isLogin.token
            }
          })
          .then((response) => {
            this.needUpload = false;
            utils.toast('上传成功');
//            avatar
          })
          .catch((e) => {
            utils.toast('修改失败');
          });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .vue-user
    display flex
    align-items center
    flex-direction column
    .user-item
      margin-top 20px
      font-size 12px
    .avatar-wrapper
      position: relative
      width 80px
      height 80px
      margin-top 50px
      .avatar
        width 100%
        height 100%
      .edit
        position absolute
        top 0px
        right 0px
        transform: translate(50%, -50%)
        font-size 12px
      .input-none
        display: none
    .app-btn-1
      margin-top 30px
</style>
