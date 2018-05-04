<template>
  <div>
      <comment :level = 'level'  ></comment>
  </div>
</template>
<script>
  import comment from './components/comment.vue'
  export default {
    data (){
      return {
        level : 'second'
      }
    },
    components: {
      comment
    }
  }
</script>
<style>

</style>
