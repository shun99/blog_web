<template>
  <div class="vue-user">
    <div class="avatar-wrapper">
      <img :src="localImage" class="avatar">
      <span class="edit" @click="editAvatar">编辑</span>
      <input class="input-none" type="file" ref="updateAvatar" @change="loadPic"/>
    </div>
    <span class="user-item">一个很严肃的人</span>
    <span class="user-item">这家伙很懒O(∩_∩)O</span>
    <button class="app-btn-1" @click="uploadAvatar()">提交头像</button>
    <button class="app-btn-1" @click="createArticle()">创建新文章</button>
  </div>
</template>

<script type="text/ecmascript-6">
  let uploadImage = '';
  export default {
    data () {
      return {
        localImage: uploadImage
      };
    },
    methods: {
      createArticle () {
        this.$router.push({path: '/article/new'});
      },
      editAvatar () {
        this.$refs.updateAvatar.click();
      },
      loadPic (e) {
        if (e.target.files && e.target.files[0]) {
          if (!/\/(?:jpeg|jpg|png)/i.test(e.target.files[0].type)) {
            return;
          }
          let reader = new FileReader();
          let vueObj = this;
          reader.onload = function (evt) {
            vueObj.localImage = evt.target.result;
          };
          reader.readAsDataURL(e.target.files[0]);
        }
      },
      uploadAvatar () {
        console.log(this.localImage);
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
