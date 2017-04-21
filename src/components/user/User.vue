<template>
  <div class="vue-user">
    <div class="avatar-wrapper">
      <img :src="image" class="avatar">
      <span class="edit" @click="editAvatar">编辑</span>
      <input class="input-none" type="file" ref="updateAvatar" @change="loadPic"/>
    </div>
    <span class="user-item">一个很严肃的人</span>
    <span class="user-item">这家伙很懒O(∩_∩)O</span>
    <button class="app-btn-1" @click="createArticle()">创建新文章</button>
    <input class="user-item" type="file"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        image: ''
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
        this.image = this.$refs.updateAvatar.value;
        console.log(this.image);
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
      margin-top 50px
</style>
