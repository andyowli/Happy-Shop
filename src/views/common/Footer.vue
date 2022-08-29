<template>
  <div class="footer">
    <Tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" route>
      <TabbarItem icon="wap-home-o" to="/home" style="background: #fafafa;">首页</TabbarItem>
      <TabbarItem icon="newspaper-o" to="/topic" style="background: #fafafa;">专题</TabbarItem>
      <TabbarItem icon="apps-o" to="/tree" style="background: #fafafa;">分类</TabbarItem>
      <TabbarItem icon="shopping-cart-o" to="/car" style="background: #fafafa;">购物车</TabbarItem>
      <TabbarItem icon="user-o"  to="/personal" style="background: #fafafa;">个人中心</TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';

  export default {
    components: {
     Tabbar,
     TabbarItem
    },
    data(){
      return {
        active:0
      }
    }
  }
</script>

<style scoped>
  
</style>
