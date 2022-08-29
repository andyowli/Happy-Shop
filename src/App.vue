<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'height: 100%;')
  },
}
</script>

<style>
*{margin: 0;padding: 0;}
#app{
  height: 100%;
  background-color: #e9ecf5;
}
</style>
