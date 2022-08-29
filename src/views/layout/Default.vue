<template>
  <div style="height:100%;">
    <div class="content">
      <router-view></router-view>
    </div>
    <footer-ele></footer-ele>
  </div>
</template>

<script>
  import FooterEle from '../common/Footer.vue'

  export default {
    components: {
      FooterEle
    }
  }
</script>

<style scoped>
  .content {
    height: 100%;
    max-width: 7.5rem;
    margin: 0 auto 1.1rem;
    background-color: #e9ecf5;
  }
</style>
