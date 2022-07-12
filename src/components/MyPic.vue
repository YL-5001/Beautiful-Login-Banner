<template>
  <div class="bigBox">
    <div class="firstOne">
      <div class="myPng">
        <img src="../assets/3.jpg" alt="">
      </div>
      <div class="text">
        <h1>Hello</h1>
        <h3>Get suggestions for lines of code and entire functions in real‑time</h3>
      </div>
    </div>
    <div class="secondOne">
      <div class="text">
        <h1>Professional</h1>
        <h3>Get suggestions for lines of code and entire functions in real‑time</h3>
      </div>
      <div class="myPng">
        <img src="../assets/1.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="less">
  .bigBox {
    display: flex;
    flex-direction: column;
    width: 100%;

    // 里面盒子的公共样式
    .myPng:hover {
      box-shadow: 0 14px 18px 0 rgba(0, 0, 0, 0.2), 0 16px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .firstOne {
      display: flex;
      margin: 30px;

      .myPng {
        margin: 55px 10px;
        width: 880px;
        height: 666px;
        overflow: hidden;
        border-radius: 100px 300px;
        transition: 0.5s;
      }

      .text {
        padding: 260px 100px;
      }
    }

    .secondOne {
      display: flex;
      margin: 30px;

      .myPng {
        margin: 20px 50px 20px 10px;
        width: 880px;
        height: 666px;
        overflow: hidden;
        border-radius: 300px 100px;
        transition: 0.5s;

      }

      .text {
        padding: 200px 10px;
      }
    }
  }
</style>