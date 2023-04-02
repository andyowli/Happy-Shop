<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    document.querySelector('body').style.height = '100%'
    document.querySelector('body').style.backgroundColor = '#e9ecf5'
  },
}
</script>

<style>
*{margin: 0;padding: 0;}
#app{
  height: 100%;
}
</style>
