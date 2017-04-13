<template>
  <home :api="home"></home>
</template>


<script type="text/ecmascript-6">
  import ListView from '@/components/base/ListView';
  import api from '../assets/js/api';

  export default {
    data () {
      return {
        home: api.home
      };
    },
    components: {
      home: ListView
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
