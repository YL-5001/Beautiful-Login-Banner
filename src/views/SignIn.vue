<template>
  <div class="box">
    <div class="signInBox">
      <h3>Welcome</h3>
      <div class="box2">
        <router-link to="/Banner">
          <i class="iconfont icon-arrow-right-circle"></i>
        </router-link>
      </div>
    </div>

  </div>

</template>

<script>
  export default {

  }
</script>

<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
  }

  .box {
    background: url('../assets/iTab-k762j7.png') no-repeat;
    position: fixed;
    width: 100%;
    height: 100%;
    background-size: 100%;
    /* 让子盒子居中 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .box2 {
    height: 50px;
    width: 100px;
    background-color: #fff;
    border-radius: 15px;
    transition: width 1s;

    .icon-arrow-right-circle {
      float: right;
      margin: 10px;
      font-size: 30px;
      color: #a7d500;
    }
  }

  .box2:hover {
    width: 300px;

  }

  /* 登录的盒子 */
  .signInBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 30vw;
    height: 40vh;
    border-radius: 15px;
    background-color: skyblue;
    /* 毛玻璃效果 */
    background: rgba(29, 29, 31, 0.72);
    backdrop-filter: saturate(180%) blur(5px);

    h3 {
      margin: 5px;
      color: #fff;
    }
  }
</style>