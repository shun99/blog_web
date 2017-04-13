<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button v-for="(btn, index) in btnList" class="modal-default-button"
                      @click="clickBtn(index)">{{btn.des}}
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      btnList: {
        type: Array,
        default: [
          {des: '确定'},
          {des: '取消'}
        ]
      }
    },
    methods: {
      clickBtn (index) {
        this.$emit('clickBtn', index);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl";

  .modal-enter
    opacity: 0;

  .modal-leave-active
    opacity: 0;

  .modal-enter .modal-container, .modal-leave-active .modal-container
    transform: rotate(360deg);

  .modal-mask
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
    .modal-wrapper
      display: table-cell;
      vertical-align: middle;
      .modal-container
        width: 26%
        min-width 260px
        margin: 0px auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
        .modal-header, .modal-body
          display flex
          justify-content center
          align-items center
        .modal-header
          font-size: 16px
          min-height 40px
          padding 10px 20px
          background theme-color
          color: #fff;
        .modal-body
          font-size: 12px
          min-height 80px
        .modal-footer
          padding-bottom 10px
          display flex
          flex-direction row-reverse
          font-size: 12px
          .modal-default-button
            background theme-color
            color #fff
            padding 2px 10px
            margin-right 10px
            font-size 12px
            -webkit-appearance: none;
            border-radius: 1px;
            border: none;
            outline: none;
</style>
