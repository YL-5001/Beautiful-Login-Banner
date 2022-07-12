<template>
<div class="myBanner">
  <div class="text">
    <h1>Welcome</h1>
    <h3>Get suggestions for lines of code and entire functions in real‑time</h3>
  </div>
  <div class="bigBox">
    <div class="pic">
      <img :src="bannerList[showNumber].url" alt="">
    </div>
    <div class="btn">
      <div class="slider" @mouseover="showImg(1)">

      </div>
      <div class="slider" @mouseover="showImg(2)"></div>
      <div class="slider" @mouseover="showImg(3)"></div>
      <div class="slider" @mouseover="showImg(4)"></div>
      <div class="slider" @mouseover="showImg(5)"></div>
    </div>
  </div>
  </div>
</template>

<script>
  import {
    onMounted,
    ref,
    reactive
  } from '@vue/runtime-core'
  export default {
    name: 'App',
    setup() {
      //变量
      let showNumber = ref(0)
      const bannerList = reactive([{
          url: require("../assets/1.jpg")
        },
        {
          url: require("../assets/2.jpg")
        },
        {
          url: require("../assets/3.jpg")
        },
        {
          url: require("../assets/4.jpg")
        },
        {
          url: require("../assets/5.jpg")
        },
      ])
      //生命周期
      onMounted(() => {
        setInterval(() => {
          if (showNumber.value < 4) {
            showNumber.value++
          } else {
            showNumber.value = 0
          }
          console.log(bannerList[showNumber.value])
        }, 2000)
      })
      //方法
      const showImg = (number) => {
        showNumber.value = number - 1 //注意number的值是从1开始的，数组下标从0开始
      }
      return {
        showNumber,
        bannerList,
        showImg
      }
    }
  }
</script>

<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

.myBanner {
  display: flex;
  width: 100vw;
  height: 600px;
}

.text {
  padding: 200px 100px;
  width: 600px;
  height: 100%;
  // background-color: orange;
}

  .bigBox {
    position: relative;
    width: 880px;
    height: 100%;
    overflow: hidden;
    border-radius: 100px;
  }

  .btn {
    position: absolute;
    top: 0;
    left: 0;
    // right: 0;
    display: flex;
    flex-wrap: nowrap; //不换行压缩宽度
    width: 100%;
    height:100%;
    // border: 3px solid #000;
    // background-color: skyblue;
    .slider {
      width: 200px;
      height: 100%;
      border: 1px solid #fff;
      border-top: none;
      border-bottom: none;
    }
  }
</style>