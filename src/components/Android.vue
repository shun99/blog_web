<template>
  <android :api="android"></android>
</template>


<script type="text/ecmascript-6">
  import ListView from '@/components/base/ListView';
  import api from '../app/api';

  export default {
    data () {
      return {
        android: api.android
      };
    },
    components: {
      android: ListView
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
