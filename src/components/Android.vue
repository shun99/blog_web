<template>
  <android :api="api"></android>
</template>


<script type="text/ecmascript-6">
  import ListView from '@/components/base/ListView';

  export default {
    data () {
      return {
        api: 'http://192.168.11.148:3000/api/list?type=1'
      };
    },
    components: {
      android: ListView
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
