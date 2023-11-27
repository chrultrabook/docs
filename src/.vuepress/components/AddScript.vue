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
      const script = document.createElement('script');
      script.src = this.scriptUrl;
      if (this.scriptId) {
        script.id = this.scriptId;
      }
      document.body.appendChild(script);
    }
  }
};
</script>
