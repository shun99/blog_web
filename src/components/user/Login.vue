<template>
  <myDialog v-if="show" :btnList="btnList" @close="close">
    <div slot="header">登入</div>
    <div slot="body" class="body-content">
      <input class="app-input" type="tel" v-model="user.phone" placeholder="手机">
      <input class="app-input" type="password" v-model="user.password" placeholder="密码">
    </div>
  </myDialog>
</template>

<script type="text/ecmascript-6">
  import Dialog from '../base/Dialog.vue';
  import api from '../../assets/js/api';
  import {saveToSession, StorageKey} from '../../assets/js/storageUtils';

  export default {
    data () {
      return {
        show: true,
        user: {
          phone: '',
          password: ''
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
        if (index === 0) {
          this.login();
        } else {
          this.show = false;
        }
      },
      login () {
        console.log(this.user);
        this.$http
          .post(api.login, this.user)
          .then((response) => {
            if (response.body.code === 0) {
              alert('登入成功');
              saveToSession(StorageKey.currentUser, StorageKey.token, response.body.data.token);
              saveToSession(StorageKey.currentUser, StorageKey.phone, this.user.phone);
              this.show = false;
            } else {
              alert('登入失败');
              this.show = false;
            }
          });
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
