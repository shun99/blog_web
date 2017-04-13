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
  import api from '../../assets/js/api';
  import {saveToSession, StorageKey} from '../../assets/js/storageUtils';
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
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
    methods: {
      clickBtn (index) {
        if (index === 0) {
          this.login();
        } else {
          this.closeDialog(0);
        }
      },
      login () {
        console.log(this.user);
        this.$http.post(api.login, this.user)
          .then((response) => {
            if (response.body.code === 0) {
              this.user.token = response.body.data.token;
              alert('登入成功');
              saveToSession(StorageKey.user, StorageKey.currentUser, this.user);
              this.closeDialog(0);
            } else {
              alert('登入失败');
              this.closeDialog(1);
            }
          });
      },
      /**
       * 0 登入成功
       * 1 取消登入
       * 2 登入失败
       * @param index
       */
      closeDialog (index) {
        this.$emit('close', index);
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
