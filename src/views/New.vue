<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <router-link to='/New/GnNew'>国内新闻</router-link>  |
      <router-link to='/New/GwNew'>国外新闻</router-link> |
      <!-- 命名路由 -->
      <router-link :to="{name:'MoreNew',params:{name:name}}">更多新闻</router-link> 
      <input type="text" v-model='name'>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return {
      name:''
    }
  }
}
</script>
<style lang="scss">
  .router-link-exact-active{
    color:red
  }
</style>
