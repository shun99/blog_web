<template>
  <home ref="child"></home>
</template>


<script type="text/ecmascript-6">
  import ListView from '@/components/base/ListView';
  import api from '../app/api';

  export default {
    data () {
      return {
        home: api.home
      };
    },
    created () {
      this.$nextTick(() => {
        let child = this.$refs.child;
        child.initData(api.home);
      });
    },
    components: {
      home: ListView
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
