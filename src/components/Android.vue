<template>
  <android :api="api"></android>
</template>


<script type="text/ecmascript-6">
  import ListView from '@/components/ListView';

  export default {
    data () {
      return {
        api: '/api/ratings'
      };
    },
    components: {
      android: ListView
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
