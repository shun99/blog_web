<template>
  <myDialog v-if="show" :btnList="btnList" @close="close">
    <div slot="header">登入</div>
    <div slot="body" class="body-content">
      <input class="app-input" type="number" v-model="user.phone" placeholder="手机">
      <input class="app-input" type="password" v-model="user.pwd" placeholder="密码">
    </div>
  </myDialog>
</template>

<script type="text/ecmascript-6">
  import Dialog from '../base/Dialog.vue';

  export default {
    data () {
      return {
        show: true,
        user: {
          phone: '',
          pwd: ''
        },
        btnList: [
          {des: '登入'},
          {des: '取消'}
        ]
      };
    },
    components: {
      'myDialog': Dialog
    },
    methods: {
      close (index) {
        console.log('..' + index);
        this.show = false;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .body-content
    width: 100%
    padding 10px
    .app-input
      padding 3px 10px
      width: 100%
      margin-top 10px
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
      &:first-child
        margin-top: 0px

</style>
