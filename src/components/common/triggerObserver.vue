<template>
  <div ref="triggerDiv">
    <slot>-</slot>
  </div>
</template>

<script>
export default {
  name: "triggerObserver",
  props : {
    persec : Number
  },
  data(){
    return{
      observer : null,
      option : {
        root : null,
        threshold : this.persec,
      }
    }
  },
  mounted(){
    this.observer = new IntersectionObserver((entries) => {
      //console.log(entries)
      this.handleIntersect(entries[0]);
    }, this.option);
    this.observer.observe(this.$refs.triggerDiv)
  },
  methods : {
    handleIntersect : function (target){
      //console.log("target" , target)
      if(target.isIntersecting){
        //console.log("target" , target)
        setTimeout(() => {
          this.$emit("triggerFadeIn", 1)
        }, 300);

      }else{
        this.$emit("triggerFadeOut", 1)
      }
    },
  },
}
</script>

<style scoped>
/*div {
  opacity: 0;
}*/
</style>
