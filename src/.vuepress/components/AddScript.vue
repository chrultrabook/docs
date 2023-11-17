<template></template>

<script>
export default {
  props: {
    scriptUrl: {
      type: String,
      required: true
    },
    scriptId: {
      type: String
    }
  },
  mounted() {
    this.loadExternalScript();
  },
  methods: {
    loadExternalScript() {
      (async() => {
        if (!window.document) {
          await new Promise(res => window.addEventListener("load", res));
        }
        if (document.readyState !== "loaded") {
          await new Promise(res => document.addEventListener("load", res));
        }
        const script = document.createElement('script');
        script.src = this.scriptUrl;
        if (this.scriptId) {
          script.id = this.scriptId;
        }
        document.body.appendChild(script);
      })();
    }
  }
};
</script>
