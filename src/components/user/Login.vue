<template>
  <myDialog v-if="show" :btnList="btnList" @clickBtn="clickBtn">
    <div slot="header">登入</div>
    <div slot="body" class="body-content">
      <input class="app-input" type="tel" v-model="user.phone" placeholder="手机">
      <input class="app-input" type="password" v-model="user.password" placeholder="密码">
    </div>
  </myDialog>
</template>

<script type="text/ecmascript-6">
  import Dialog from '../base/Dialog.vue';
  import api from '../../app/api';
  import * as utils from '../../utils/index';
  import Md5 from 'md5';
  export default {
    data () {
      return {
        user: {},
        btnList: [
          {des: '登入'},
          {des: '取消'}
        ]
      };
    },
    components: {
      'myDialog': Dialog
    },
    computed: {
      show () {
        return this.$store.state.user.showLogin;
      }
    },
    methods: {
      clickBtn (index) {
        if (index === 0) {
          if (this.verifyLogin()) {
            this.goLogin();
          }
        } else {
          utils.loginStatus(false);
        }
      },
      goLogin () {
        this.user.password = Md5(this.user.password);
        this.$http.post(api.login, this.user)
          .then((response) => {
            if (response.body.code === 0) {
              this.user.token = response.body.data.token;
              this.user.uid = response.body.data.uid;
              utils.toast('登入成功');
              utils.loginStatus(false);
              utils.user.save(this.user);
            } else {
              utils.toast('登入失败');
              utils.loginStatus(false);
            }
          });
      },
      verifyLogin () {
        if (!this.user.phone) {
          utils.toast('请输入手机');
          return false;
        }
        if (!this.user.password) {
          utils.toast('请输入密码');
          return false;
        }
        return true;
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
