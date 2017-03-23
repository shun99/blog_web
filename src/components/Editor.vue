<template>
  <div class="editor-vue">
    <div class="edit-wrapper">
      <textarea class="content" v-model="input"></textarea>
    </div>
    <div class="show-wrapper">
      <div class="content" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import marked from 'marked';

  export default {
    data () {
      return {
        input: '# hello'
      };
    },
    computed: {
      compiledMarkdown () {
        return marked(this.input, {sanitize: true});
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  editor-vue
    font-family: 'Helvetica Neue', Arial, sans-serif
    display: flex
    font-size: 0px
    .edit-wrapper, .show-wrapper
      flex 1
    .edit-wrapper
      .content
        background-color: #f6f6f6;
        font-family: 'Monaco', courier, monospace;
        font-size: 12px
        line-height: 16px
        resize: none;
        outline: none;
    .show-wrapper
      .content
        font-size: 12px
</style>
