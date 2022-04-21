<template>
  <div>
  <h2>{{$index.state.counter}}</h2>
    <h2>{{$index.getters.powerCounter}}</h2>
    <h2>{{$index.getters.more20stu}}</h2>
    <h2>{{$index.getters.more20stuLength}}</h2>

  </div>
</template>

<script>
  export default {
    name: "HelloVuex"
  }
</script>

<style scoped>

</style>
