<template>
  <div>
    <header class="myHeader">
      <router-link to="/">
        <i class="iconfont icon-arrow-left-circle"></i>
      </router-link>
    </header>
    
    <div class="content">
      <MyBanner class="myBanner" />
      <MyPic />
    </div>

    <footer class="myFooter">
      <ToTop />
    </footer>
  </div>
</template>

<script>
  //引入子组件
  import MyBanner from '../components/MyBanner.vue'
  import MyPic from '../components/MyPic.vue'
  import ToTop from '../components/ToTop.vue'
  export default {
    name: 'Banner',
    components: {
      MyBanner,
      MyPic,
      ToTop
    }
  }
</script>

<style scoped lang="less">
  .myHeader {
    height: 50px;
    width: 100%;

    .icon-arrow-left-circle {
      float: left;
      margin: 10px;
      font-size: 30px;
      color: #a7d500;
    }
  }

  .content {
    .myBanner {
      margin: 55px 20px;
    }
  }

  .myFooter {
    height: 100px;
    width: 100%;
    background-color: black;
  }
</style>