<template>
  <div class="about-vue">{{msg}}</div>

</template>


<script type="text/ecmascript-6">

  export default {
    data () {
      return {
        msg: ''
      };
    },
    created () {
      this.$http.get('http://192.168.11.148:3000/api/rating').then(response => {
        this.msg = response.body.data;
        console.log(this.msg);
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .about-vue
    font-size 16px
    color cornflowerblue
</style>
