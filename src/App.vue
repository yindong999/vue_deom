<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Home">Home</router-link>|
      <router-link to="/GoodsList">商品列表</router-link>|
      <router-link to="/New">新闻</router-link>|
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app #nav .router-link-active {
  color: red;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
