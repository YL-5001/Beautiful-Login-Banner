<template>
  <div id="app">
    <router-view />
    <div class="statement">
      <span>@LYZ 2022/07/12</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  body {
    height: 100%;
    /* 注意这里宽度设置大一些，就是把滚动条挤出视图框然后隐藏了 */
    width: 103%;
    overflow-y: scroll;
  }

  #app {
    position: relative;
  }

  a {
    text-decoration: none;
  }

  .statement {
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    color: #fff;
    font-size: 8px;
  }
</style>