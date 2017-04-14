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
  import * as vuexTypes from '../../store/vuex-types';
  export default {
    data () {
      return {
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
    computed: {
      show () {
        return this.$store.state.user.showLogin;
      }
    },
    methods: {
      clickBtn (index) {
        if (index === 0) {
          if (this.verifyLogin()) {
            this.login();
          }
        } else {
          this.$store.commit(vuexTypes.USER_SHOW_LOGIN, false);
        }
      },
      login () {
        this.$http.post(api.login, this.user)
          .then((response) => {
            if (response.body.code === 0) {
              this.user.token = response.body.data.token;
              this.$store.commit(vuexTypes.USER_INFO_UPDATE, this.user);
              this.$store.commit(vuexTypes.APP_SHOW_TOAST, '登入成功');
              this.$store.commit(vuexTypes.USER_SHOW_LOGIN, false);
            } else {
              this.$store.commit(vuexTypes.APP_SHOW_TOAST, '登入失败');
              this.$store.commit(vuexTypes.USER_SHOW_LOGIN, false);
            }
          });
      },
      verifyLogin () {
        if (!this.user.phone) {
          this.$store.commit(vuexTypes.APP_SHOW_TOAST, '未输入用名');
          return false;
        }
        if (!this.user.password) {
          this.$store.commit(vuexTypes.APP_SHOW_TOAST, '未输入密码');
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
