<template>
  <listView ref="child"></listView>
</template>


<script type="text/ecmascript-6">
  import ListView from '@/components/base/ListView';
  import api from '../app/api';

  export default {
    data () {
      return {
        sort: api.list
      };
    },
    components: {
      listView: ListView
    },
    created () {
      this.$nextTick(() => {
        let child = this.$refs.child;
        child.initData(api.list + this.$route.params.type);
      });
    },
    watch: {
      '$route' (to, from) {
        if (to.path.indexOf('/sort') !== -1) {
          let child = this.$refs.child;
          child.initData(api.list + this.$route.params.type);
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
