<template>
  <myDialog v-if="show" @close="close()">
    <h3 slot="header">custom header</h3>
  </myDialog>
</template>

<script type="text/ecmascript-6">
  import Dialog from '../base/Dialog.vue';

  export default {
    data () {
      return {
        show: true
      };
    },
    components: {
      'myDialog': Dialog
    },
    methods: {
      close () {
        this.show = false;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">


</style>
