<!--markdown解析器-->
<template>
  <div class="markdown-vue">
    <div class="markdown-body" v-html="compiledMarkdown">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import marked from 'marked';
  import hljs from 'highlight.js';

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  export default {
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    created () {
      if (!this.editStatus && !this.previewStatus) {
        this.editStatus = true;
        this.previewStatus = true;
      }
    },
    computed: {
      compiledMarkdown () {
        return marked(this.content, {
          sanitize: true
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/css/github-markdown.css";
  @import "../../assets/css/atom-one-dark.min.css";
  li {
    list-style disc
  }

</style>
