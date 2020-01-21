<template>
  <button @click="click">
      {{statusText[status]}}
  </button>
</template>

<script>
const BenzAMRRecorder = require("benz-amr-recorder");

export default {
  name: "vue-amr",
  data() {
    return {
      status: "end",
      amr: null,
      statusText:{
          'start': '结束',
          'end': '开始'
      }
    };
  },
  props: ["url"],
  methods: {
  async click() {
        if(!this.amr){
        const amr = new BenzAMRRecorder()
        this.amr = amr
          await amr.initWithUrl(this.url)
          amr.play();
          amr.onEnded(() => {
              this.amr = null
              this.status = 'end'
          })
          this.status = 'start'
          return 
        }
        if(this.status === 'start'){  this.amr.stop() }
    }
  }
};
</script>
